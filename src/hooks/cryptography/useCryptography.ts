import { useCallback } from 'react';

type CryptFunc = (text: string) => Promise<string>;
type Cryptography = {
  encrypt: CryptFunc;
  decrypt: CryptFunc;
};

export default function useCryptography(): Cryptography {
  const encrypt = useCallback(
    (plainText: string) => new Promise<string>((resolve, reject) => {
      overwolf.cryptography.encryptForCurrentUser(plainText, (result) => {
        if (result.success) {
          resolve(result.ciphertext as string);
        } else {
          reject(result.error);
        }
      });
    }),
    [],
  );

  const decrypt = useCallback(
    (cipherText: string) => new Promise<string>((resolve, reject) => {
      overwolf.cryptography.decryptForCurrentUser(cipherText, (result) => {
        if (result.success) {
          resolve(result.plaintext as string);
        } else {
          reject(result.error);
        }
      });
    }),
    [],
  );

  return {
    encrypt,
    decrypt,
  };
}
