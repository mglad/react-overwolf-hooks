import { useCallback } from 'react';
import { DirResult, FileType, StorageSpace } from '../../../types/extensions';

type IO = {
  createDirectory: (space: StorageSpace, path: string) => Promise<void>;
  getStoragePath: (space: StorageSpace) => Promise<string>;
  exist: (space: StorageSpace, path: string) => Promise<FileType>;
  move: (
    space: StorageSpace,
    source: string,
    destination: string
  ) => Promise<void>;
  copy: (
    space: StorageSpace,
    source: string,
    destination: string
  ) => Promise<void>;
  dir: (space: StorageSpace, path: string) => Promise<DirResult>;
  readTextFile: (space: StorageSpace, path: string) => Promise<string>;
  writeTextFile: (
    space: StorageSpace,
    path: string,
    content: string
  ) => Promise<void>;
};

export default function useIO(): IO {
  const createDirectory = useCallback(
    (space: StorageSpace, path: string) => new Promise<void>((resolve, reject) => {
      overwolf.extensions.io.createDirectory(space, path, (result) => {
        if (result.success) {
          resolve();
        } else {
          reject(result.error);
        }
      });
    }),
    [],
  );

  const getStoragePath = useCallback(
    (space: StorageSpace) => new Promise<string>((resolve, reject) => {
      overwolf.extensions.io.getStoragePath(space, (result) => {
        if (result.success) {
          resolve(result.path);
        } else {
          reject(result.error);
        }
      });
    }),
    [],
  );

  const exist = useCallback(
    (space: StorageSpace, path: string) => new Promise<FileType>((resolve, reject) => {
      overwolf.extensions.io.exist(space, path, (result) => {
        if (result.success) {
          resolve(result.type);
        } else {
          reject(result.error);
        }
      });
    }),
    [],
  );

  const move = useCallback(
    (space: StorageSpace, source: string, destination: string) => new Promise<void>(
      (resolve, reject) => {
        overwolf.extensions.io.move(space, source, destination, (result) => {
          if (result.success) {
            resolve();
          } else {
            reject(result.error);
          }
        });
      },
    ),
    [],
  );

  const copy = useCallback(
    (space: StorageSpace, source: string, destination: string) => new Promise<void>(
      (resolve, reject) => {
        overwolf.extensions.io.copy(space, source, destination, (result) => {
          if (result.success) {
            resolve();
          } else {
            reject(result.error);
          }
        });
      },
    ),
    [],
  );

  const dir = useCallback(
    (space: StorageSpace, path: string) => new Promise<DirResult>((resolve, reject) => {
      overwolf.extensions.io.dir(space, path, (result) => {
        if (result.success) {
          resolve(result);
        } else {
          reject(result.error);
        }
      });
    }),
    [],
  );

  const readTextFile = useCallback(
    (space: StorageSpace, path: string) => new Promise<string>((resolve, reject) => {
      overwolf.extensions.io.readTextFile(space, path, (result) => {
        if (result.success) {
          resolve(result.content!);
        } else {
          reject(result.error);
        }
      });
    }),
    [],
  );

  const writeTextFile = useCallback(
    (space: StorageSpace, path: string, content: string) => new Promise<void>(
      (resolve, reject) => {
        overwolf.extensions.io.writeTextFile(space, path, content, (result) => {
          if (result.success) {
            resolve();
          } else {
            reject(result.error);
          }
        });
      },
    ),
    [],
  );

  return {
    createDirectory,
    getStoragePath,
    exist,
    move,
    copy,
    dir,
    readTextFile,
    writeTextFile,
  };
}
