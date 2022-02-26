import { useEffect } from 'react';

export default function useTrayMenuItemClicked(onClicked: (item: string) => any) {
  useEffect(() => {
    const onItemClicked = (event: overwolf.os.tray.onMenuItemClickedEvent) => {
      onClicked(event.item);
    };
    overwolf.os.tray.onMenuItemClicked.addListener(onItemClicked);

    return () => overwolf.os.tray.onMenuItemClicked.removeListener(onItemClicked);
  }, [onClicked]);
}
