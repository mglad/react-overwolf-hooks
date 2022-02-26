import { useCallback } from 'react';
import { CheckForUpdateResult, Manifest, UpdateExtensionResult } from '../../types/extensions';

type Extensions = {
  launch: (id: string, parameter: Object) => void;
  setInfo: (info: Object) => void;
  getInfo: (id: string) => Promise<string>;
  getManifest: (id: string) => Promise<Manifest>;
  isRunning: (id: string) => Promise<boolean>;
  relaunch: () => void;
  updateExtension: () => Promise<UpdateExtensionResult>;
  checkForExtensionUpdate: () => Promise<CheckForUpdateResult>;
  getServiceConsumers: () => Promise<Object>;
};

export default function useExtensions(): Extensions {
  const launch = useCallback(
    (id: string, parameter: Object) => overwolf.extensions.launch(id, parameter),
    [],
  );
  const setInfo = useCallback(
    (info: Object) => overwolf.extensions.setInfo(info),
    [],
  );
  const getInfo = useCallback(
    (id: string) => new Promise<string>((resolve, reject) => {
      overwolf.extensions.getInfo(id, (result) => {
        if (result.success) {
          resolve(result.info);
        } else {
          reject(result.error);
        }
      });
    }),
    [],
  );
  const getManifest = useCallback(
    (id: string) => new Promise<Manifest>((resolve, reject) => {
      overwolf.extensions.getManifest(id, (result) => {
        if (result.success) {
          resolve(result);
        } else {
          reject(result.error);
        }
      });
    }),
    [],
  );

  const isRunning = useCallback(
    (id: string) => new Promise<boolean>((resolve, reject) => {
      overwolf.extensions.getRunningState(id, (result) => {
        if (result.success) {
          resolve(result.isRunning);
        } else {
          reject(result.error);
        }
      });
    }),
    [],
  );
  const relaunch = useCallback(() => overwolf.extensions.relaunch(), []);

  const updateExtension = useCallback(
    () => new Promise<UpdateExtensionResult>((resolve, reject) => {
      overwolf.extensions.updateExtension((result) => {
        if (result.success) {
          resolve(result);
        } else {
          reject(result.error);
        }
      });
    }),
    [],
  );

  const checkForExtensionUpdate = useCallback(
    () => new Promise<CheckForUpdateResult>((resolve, reject) => {
      overwolf.extensions.checkForExtensionUpdate((result) => {
        if (result.success) {
          resolve(result);
        } else {
          reject(result.error);
        }
      });
    }),
    [],
  );

  const getServiceConsumers = useCallback(
    () => new Promise<Object>((resolve, reject) => {
      overwolf.extensions.getServiceConsumers((result) => {
        if (result.success) {
          resolve(result);
        } else {
          reject(result.error);
        }
      });
    }),
    [],
  );

  return {
    launch,
    setInfo,
    getInfo,
    getManifest,
    isRunning,
    relaunch,
    updateExtension,
    checkForExtensionUpdate,
    getServiceConsumers,
  };
}
