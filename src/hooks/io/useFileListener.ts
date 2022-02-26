import { useRef, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

type FileListener = {
  stop: () => void;
};

export default function useFileListener(
  onContent: (content: string) => any,
  path: string,
  skipToEnd: boolean = false,
  encoding: overwolf.io.enums.eEncoding = overwolf.io.enums.eEncoding.UTF8,
  onError: (error: string) => any = () => {},
): FileListener {
  const idRef = useRef(uuidv4());
  useEffect(() => {
    const id = idRef.current;
    overwolf.io.listenOnFile(id, path, { skipToEnd, encoding }, (result) => {
      if (result.success) {
        onContent(result.content ?? '');
      } else {
        onError(result.error ?? '');
      }
    });

    return () => overwolf.io.stopFileListener(id);
  }, [encoding, onContent, onError, path, skipToEnd]);

  const stop = useCallback(() => {
    overwolf.io.stopFileListener(idRef.current);
  }, []);

  return {
    stop,
  };
}
