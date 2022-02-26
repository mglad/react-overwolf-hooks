import { useEffect, useState } from 'react';
import { AppLaunchTriggeredEvent } from '../../types/extensions';

export default function useAppLaunchTriggered(): AppLaunchTriggeredEvent | undefined {
  const [appLaunch, setAppLaunch] = useState<AppLaunchTriggeredEvent | undefined>();
  useEffect(() => {
    overwolf.extensions.onAppLaunchTriggered.addListener(setAppLaunch);
    return () => overwolf.extensions.onAppLaunchTriggered.removeListener(setAppLaunch);
  }, []);

  return appLaunch;
}
