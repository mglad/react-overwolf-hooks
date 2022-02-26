import { useEffect, useState } from 'react';
import { AppInstallationEvent } from '../../types/extensions';

export default function useAppUninstalled(): AppInstallationEvent | undefined {
  const [appInstall, setAppInstall] = useState<AppInstallationEvent | undefined>();
  useEffect(() => {
    overwolf.extensions.onAppUninstalled.addListener(setAppInstall);
    return () => overwolf.extensions.onAppUninstalled.removeListener(setAppInstall);
  }, []);

  return appInstall;
}
