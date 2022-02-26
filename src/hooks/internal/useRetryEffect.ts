import { useState, DependencyList, useEffect } from 'react';

type RetryParams = {
  count: number;
  waitTime: number;
};
type Destructor = () => void;
type RetryFunc = () => void;
type EffectCallbackWithRetry = (retry: RetryFunc) => void | Destructor;

function useRetryEffect(
  callback: EffectCallbackWithRetry,
  dependencyList: DependencyList,
  retryParams: RetryParams,
) {
  const [retryCount, setRetryCount] = useState(0);
  const { count, waitTime } = retryParams;

  return useEffect(() => {
    const onRetry = () => {
      if (retryCount > count) {
        return;
      }

      setTimeout(() => {
        setRetryCount((prev) => prev + 1);
      }, waitTime);
    };

    return callback(onRetry);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencyList, count, waitTime, retryCount]);
}

export default useRetryEffect;
