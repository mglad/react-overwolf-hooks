import { useState, useEffect, useCallback } from 'react';
import { LauncherFeature, LauncherIDValues } from '../../../types/launcher';
import useRequiredLauncherFeatures from './useRequiredLauncherFeatures';

export default function useLauncherEvents<T, K extends LauncherIDValues>(
  id: K,
  features: LauncherFeature[K][],
): T | undefined {
  const [launcherEvents, setLauncherEvents] = useState<T | undefined>(
    undefined,
  );
  const hasRequiredFeatures = useRequiredLauncherFeatures(id, features);
  const idNum = Number(id);
  const onInfo = useCallback(() => {
    window.overwolf.games.launchers.events.getInfo(idNum, (result) => {
      if (result.success) {
        setLauncherEvents(result.res);
      }
    });
  }, [idNum]);

  useEffect(() => {
    if (!hasRequiredFeatures) {
      return;
    }

    window.overwolf.games.launchers.events.getInfo(idNum, (result) => {
      if (result.success) {
        setLauncherEvents(result.res);
      }
    });

    window.overwolf.games.launchers.events.onInfoUpdates.addListener(onInfo);
    return () => window.overwolf.games.launchers.events.onInfoUpdates.removeListener(
      onInfo,
    );
  }, [hasRequiredFeatures, idNum, onInfo]);
  return launcherEvents;
}
