import { useCallback } from 'react';
import { Manifest } from '../../../types/extensions';

type CurrentExtension = {
  getManifest: () => Promise<Manifest>;
  getExtraObject: (name: string) => Promise<any>;
};

export default function useCurrentExtension(): CurrentExtension {
  const getManifest = useCallback(
    () => new Promise<Manifest>((resolve, reject) => {
      overwolf.extensions.current.getManifest((result) => {
        if (result.success) {
          resolve(result);
        } else {
          reject(result.error);
        }
      });
    }),
    [],
  );

  const getExtraObject = useCallback(
    (name: string) => new Promise<any>((resolve, reject) => {
      overwolf.extensions.current.getExtraObject(name, (result) => {
        if (result.success) {
          resolve(result.object);
        } else {
          reject(result.error);
        }
      });
    }),
    [],
  );

  return {
    getManifest,
    getExtraObject,
  };
}
