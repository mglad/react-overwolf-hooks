import { useCallback } from 'react';

type GetResult = { [key: string]: string };
type SharedData = {
  get: (origin?: string, target?: string) => Promise<GetResult>;
  set: (appId: string, object: Object) => Promise<void>;
};

export default function useSharedData(): SharedData {
  const get = useCallback(
    (origin?: string, target?: string) => new Promise<GetResult>((resolve, reject) => {
      overwolf.extensions.sharedData.get({ origin, target }, (result) => {
        if (result.success) {
          resolve(result.data);
        } else {
          reject(result.error);
        }
      });
    }),
    [],
  );

  const set = useCallback(
    (appId: string, object: Object) => new Promise<void>((resolve, reject) => {
      overwolf.extensions.sharedData.set(appId, object, (result) => {
        if (result.success) {
          resolve();
        } else {
          reject(result.error);
        }
      });
    }),
    [],
  );

  return {
    get,
    set,
  };
}
