import { useState } from 'react';
import { GameFeature, GameIDValues } from '../../../types/game';
import useRetryEffect from '../../internal/useRetryEffect';
import useRunningGame from '../useRunningGame';

export default function useRequiredGameFeatures<K extends GameIDValues>(
  id: K,
  features: GameFeature[K][],
): boolean {
  const [success, setSuccess] = useState(false);
  const runningGame = useRunningGame();

  useRetryEffect(
    (retry) => {
      if (runningGame?.classId !== Number(id)) {
        return;
      }

      window.overwolf.games.events.setRequiredFeatures(
        features,
        (result) => {
          if (!result.success) {
            retry();
            return;
          }
          setSuccess(result.success);
        },
      );
    },
    [id, features, runningGame],
    { count: 5, waitTime: 3000 },
  );
  return success;
}
