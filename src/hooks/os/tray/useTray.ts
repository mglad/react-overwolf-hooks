import { useCallback } from 'react';

type Tray = {
  set: (menu: overwolf.os.tray.ExtensionTrayMenu) => Promise<void>;
};

export default function useTray(): Tray {
  const set = useCallback(
    (menu: overwolf.os.tray.ExtensionTrayMenu) => new Promise<void>((resolve, reject) => {
      overwolf.os.tray.setMenu(menu, (result) => {
        if (result.success) {
          resolve();
        } else {
          reject(result.error);
        }
      });
    }),
    [],
  );

  return { set };
}
