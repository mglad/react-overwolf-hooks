import { useEffect, useState } from 'react';

type PromiseRet<T> = {
  data: T | undefined;
  error: any | undefined;
};
export default function usePromise<T>(promise: Promise<T>): PromiseRet<T> {
  const [data, setData] = useState<T | undefined>();
  const [error, setError] = useState<any | undefined>();
  useEffect(() => {
    promise.then(setData).catch(setError);
  }, [promise]);

  return {
    data,
    error,
  };
}
