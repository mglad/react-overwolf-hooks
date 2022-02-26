import { useState, useEffect, useCallback } from 'react';
import { RunningGameInfo } from '../../types/game';

export default function useRunningGame(): RunningGameInfo | undefined {
  const [game, setGame] = useState<RunningGameInfo | undefined>();

  const onGameLaunched = useCallback(() => {
    overwolf.games.getRunningGameInfo2((result) => {
      setGame(result.gameInfo ?? undefined);
    });
  }, []);
  const onGameInfoUpdated = useCallback(() => {
    overwolf.games.getRunningGameInfo2((result) => {
      setGame(result.gameInfo ?? undefined);
    });
  }, []);

  useEffect(() => {
    overwolf.games.getRunningGameInfo2((result) => {
      setGame(result.gameInfo ?? undefined);
    });

    overwolf.games.onGameLaunched.addListener(onGameLaunched);
    overwolf.games.onGameInfoUpdated.addListener(onGameInfoUpdated);
    return () => {
      overwolf.games.onGameLaunched.removeListener(onGameLaunched);
      overwolf.games.onGameInfoUpdated.removeListener(onGameInfoUpdated);
    };
  }, [onGameInfoUpdated, onGameLaunched]);

  return game;
}
