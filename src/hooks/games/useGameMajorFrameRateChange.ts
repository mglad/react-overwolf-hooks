import { useEffect, useState } from 'react';
import { MajorFrameRateChangeEvent } from '../../types/game';

export default function useGameMajorFrameRateChange(): MajorFrameRateChangeEvent | undefined {
  const [event, setEvent] = useState<MajorFrameRateChangeEvent | undefined>();
  useEffect(() => {
    overwolf.games.onMajorFrameRateChange.addListener(setEvent);
    return () => overwolf.games.onMajorFrameRateChange.removeListener(setEvent);
  }, []);

  return event;
}
