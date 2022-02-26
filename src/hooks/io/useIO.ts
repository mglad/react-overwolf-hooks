import { useCallback } from 'react';
import { Directory, FileResult } from '../../types/io';

type IO = {
  fileExists: (path: string) => Promise<boolean>;
  writeFile: (
    path: string,
    content: string,
    encoding: overwolf.io.enums.eEncoding,
    triggerUacIfRequired: boolean
  ) => Promise<void>;
  readFile: (
    path: string,
    encoding: overwolf.io.enums.eEncoding
  ) => Promise<string>;
  copyFile: (
    source: string,
    destination: string,
    overrideFile: boolean,
    reserved: boolean
  ) => Promise<void>;
  dir: (path: string) => Promise<Directory>;
  readBinaryFile: (
    path: string,
    encoding: overwolf.io.enums.eEncoding,
    maxBytesToRead: number,
    offset: number
  ) => Promise<FileResult>;
  readTextFile: (
    path: string,
    encoding: overwolf.io.enums.eEncoding,
    maxBytesToRead: number,
    offset: number
  ) => Promise<FileResult>;
  exists: (path: string) => Promise<boolean>;
};

export default function useIO(): IO {
  const fileExists = useCallback(
    (path: string) => new Promise<boolean>((resolve, reject) => {
      overwolf.io.fileExists(path, (result) => {
        if (result.success) {
          resolve(result.found ?? false);
        } else {
          reject(result.error);
        }
      });
    }),
    [],
  );

  const writeFile = useCallback(
    (
      path: string,
      content: string,
      encoding: overwolf.io.enums.eEncoding = overwolf.io.enums.eEncoding.UTF8,
      triggerUacIfRequired: boolean = false,
    ) => new Promise<void>((resolve, reject) => {
      overwolf.io.writeFileContents(
        path,
        content,
        encoding,
        triggerUacIfRequired,
        (result) => {
          if (result.success) {
            resolve();
          } else {
            reject(result.error);
          }
        },
      );
    }),
    [],
  );

  const readFile = useCallback(
    (
      path: string,
      encoding: overwolf.io.enums.eEncoding = overwolf.io.enums.eEncoding.UTF8,
    ) => new Promise<string>((resolve, reject) => {
      overwolf.io.readFileContents(path, encoding, (result) => {
        if (result.success) {
          resolve(result.content!);
        } else {
          reject(result.error);
        }
      });
    }),
    [],
  );

  const copyFile = useCallback(
    (
      source: string,
      destination: string,
      overrideFile: boolean = false,
      reserved: boolean = false,
    ) => new Promise<void>((resolve, reject) => {
      overwolf.io.copyFile(
        source,
        destination,
        overrideFile,
        reserved,
        (result) => {
          if (result.success) {
            resolve();
          } else {
            reject(result.error);
          }
        },
      );
    }),
    [],
  );

  const dir = useCallback(
    (path: string) => new Promise<Directory>((resolve, reject) => {
      overwolf.io.dir(path, (result) => {
        if (result.success) {
          resolve(result.data ?? []);
        } else {
          reject(result.error);
        }
      });
    }),
    [],
  );

  const readBinaryFile = useCallback(
    (
      path: string,
      encoding: overwolf.io.enums.eEncoding = overwolf.io.enums.eEncoding.UTF8,
      maxBytesToRead: number = 0,
      offset: number = 0,
    ) => new Promise<FileResult>((resolve, reject) => {
      overwolf.io.readBinaryFile(
        path,
        {
          encoding,
          maxBytesToRead,
          offset,
        },
        (result) => {
          if (result.success) {
            resolve({
              content: result.content!,
              info: result.info!,
            });
          } else {
            reject(result.error);
          }
        },
      );
    }),
    [],
  );

  const readTextFile = useCallback(
    (
      path: string,
      encoding: overwolf.io.enums.eEncoding = overwolf.io.enums.eEncoding.UTF8,
      maxBytesToRead: number = 0,
      offset: number = 0,
    ) => new Promise<FileResult>((resolve, reject) => {
      overwolf.io.readTextFile(
        path,
        {
          encoding,
          maxBytesToRead,
          offset,
        },
        (result) => {
          if (result.success) {
            resolve({
              content: result.content!,
              info: result.info!,
            });
          } else {
            reject(result.error);
          }
        },
      );
    }),
    [],
  );

  const exists = useCallback((path: string) => new Promise<boolean>((resolve, reject) => {
    overwolf.io.exist(
      path,
      (result) => {
        if (result.success) {
          resolve(result.exist ?? false);
        } else {
          reject(result.error);
        }
      },
    );
  }), []);

  return {
    fileExists,
    writeFile,
    readFile,
    copyFile,
    dir,
    readBinaryFile,
    readTextFile,
    exists,
  };
}
