import { useState, useEffect, useCallback } from 'react';
import { GameFeature, GameIDValues } from '../../../types/game';
import useRequiredGameFeatures from './useRequiredGameFeatures';

export default function useGameEvents<T, K extends GameIDValues>(
  id: K,
  features: GameFeature[K][],
): T | undefined {
  const [gameEvents, setGameEvents] = useState<T | undefined>(
    undefined,
  );
  const hasRequiredFeatures = useRequiredGameFeatures(id, features);

  const onInfo = useCallback(() => {
    window.overwolf.games.events.getInfo((result) => {
      if (result.success) {
        setGameEvents(result.res);
      }
    });
  }, []);

  useEffect(() => {
    if (!hasRequiredFeatures) {
      return;
    }

    window.overwolf.games.events.getInfo((result) => {
      if (result.success) {
        setGameEvents(result.res);
      }
    });

    window.overwolf.games.events.onInfoUpdates2.addListener(onInfo);
    return () => window.overwolf.games.events.onInfoUpdates2.removeListener(
      onInfo,
    );
  }, [hasRequiredFeatures, onInfo]);
  return gameEvents;
}
