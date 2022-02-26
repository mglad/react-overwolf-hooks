import { useState } from 'react';
import useLauncher from './useLauncher';
import useRetryEffect from '../../internal/useRetryEffect';
import { LauncherFeature, LauncherID, LauncherIDValues } from '../../../types/launcher';

export default function useRequiredLauncherFeatures<K extends LauncherIDValues>(
  id: K,
  features: LauncherFeature[K][],
): boolean {
  const [success, setSuccess] = useState(false);
  const launcher = useLauncher(<LauncherID>id);

  useRetryEffect(
    (retry) => {
      if (!launcher) {
        return;
      }

      window.overwolf.games.launchers.events.setRequiredFeatures(
        Number(id),
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
    [id, features, launcher],
    { count: 5, waitTime: 3000 },
  );
  return success;
}
