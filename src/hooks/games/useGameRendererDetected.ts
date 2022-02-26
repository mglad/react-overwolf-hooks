import { useEffect, useState } from 'react';

export default function useGameRendererDetected(): string | undefined {
  const [detectedRenderer, setDetectedRenderer] = useState<string | undefined>();
  useEffect(() => {
    const onDetected = (event: overwolf.games.GameRendererDetectedEvent) => {
      setDetectedRenderer(event.detectedRenderer);
    };

    overwolf.games.onGameRendererDetected.addListener(onDetected);
    return () => overwolf.games.onGameRendererDetected.removeListener(onDetected);
  }, []);

  return detectedRenderer;
}
