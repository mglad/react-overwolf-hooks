import { useEffect } from 'react';

export default function useTrayIconClicked(onClicked: () => any) {
  useEffect(() => {
    overwolf.os.tray.onTrayIconClicked.addListener(onClicked);

    return () => overwolf.os.tray.onTrayIconClicked.removeListener(onClicked);
  }, [onClicked]);
}
