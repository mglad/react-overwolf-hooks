import { useState, useEffect, useCallback } from 'react';
import { LauncherID, LauncherInfo } from '../../../types/launcher';

export default function useLauncher(id: LauncherID): LauncherInfo | undefined {
  const [launcher, setLauncher] = useState<LauncherInfo | undefined>();
  const idNum = Number(id);
  const onLaunched = useCallback(
    (event: overwolf.games.launchers.LauncherInfo) => {
      if (event.classId === idNum) {
        setLauncher(event);
      }
    },
    [idNum],
  );

  const onUpdated = useCallback(
    (event: overwolf.games.launchers.UpdatedEvent) => {
      if (event.info.classId === idNum) {
        setLauncher(event.info);
      }
    },
    [idNum],
  );

  const onTerminated = useCallback(
    (event: overwolf.games.launchers.LauncherInfo) => {
      if (event.classId === idNum) {
        setLauncher(undefined);
      }
    },
    [idNum],
  );

  useEffect(() => {
    overwolf.games.launchers.getRunningLaunchersInfo((result) => {
      if (result.success) {
        const runningLauncher = result.launchers.find(
          (l) => l.classId === idNum,
        );
        if (runningLauncher) {
          setLauncher(runningLauncher);
        }
      }
    });

    overwolf.games.launchers.onLaunched.addListener(onLaunched);
    overwolf.games.launchers.onUpdated.addListener(onUpdated);
    overwolf.games.launchers.onTerminated.addListener(onTerminated);
    return () => {
      overwolf.games.launchers.onLaunched.removeListener(onLaunched);
      overwolf.games.launchers.onUpdated.removeListener(onUpdated);
      overwolf.games.launchers.onTerminated.removeListener(onTerminated);
    };
  }, [idNum, onLaunched, onTerminated, onUpdated]);
  return launcher;
}
