import { useEffect, useState } from 'react';
import { AppInstallationEvent } from '../../types/extensions';

export default function useAppInstalled(): AppInstallationEvent | undefined {
  const [appInstall, setAppInstall] = useState<AppInstallationEvent | undefined>();
  useEffect(() => {
    overwolf.extensions.onAppInstalled.addListener(setAppInstall);
    return () => overwolf.extensions.onAppInstalled.removeListener(setAppInstall);
  }, []);

  return appInstall;
}
