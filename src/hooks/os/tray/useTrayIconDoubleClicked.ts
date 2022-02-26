import { useEffect } from 'react';

export default function useTrayIconDoubleClicked(onClicked: () => any) {
  useEffect(() => {
    overwolf.os.tray.onTrayIconDoubleClicked.addListener(onClicked);

    return () => overwolf.os.tray.onTrayIconDoubleClicked.removeListener(onClicked);
  }, [onClicked]);
}
