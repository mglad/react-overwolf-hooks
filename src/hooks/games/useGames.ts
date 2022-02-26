import { useCallback } from 'react';
import { GameDBInfo, GameID, GameInfo } from '../../types/game';

type Games = {
  getGameInfo: (id: GameID) => Promise<GameInfo | undefined>;
  getRecentlyPlayed: (maxNumOfGames: number) => Promise<number[]>;
  getLastRunningGame: () => Promise<GameInfo | undefined>;
  getGameDBInfo: (id: GameID) => Promise<GameDBInfo>;
};

export default function useGames(): Games {
  const getGameInfo = useCallback((id: GameID) => new Promise<GameInfo | undefined>(
    (resolve, reject) => {
      overwolf.games.getGameInfo(Number(id), (result) => {
        if (result.success) {
          resolve(result.gameInfo);
        } else {
          reject(result.error);
        }
      });
    },
  ), []);

  const getRecentlyPlayed = useCallback((maxNumOfGames: number) => new Promise<number[]>(
    (resolve, reject) => {
      overwolf.games.getRecentlyPlayedGames(maxNumOfGames, (result) => {
        if (result.success) {
          resolve(result.games);
        } else {
          reject(result.error);
        }
      });
    },
  ), []);

  const getLastRunningGame = useCallback(() => new Promise<GameInfo | undefined>(
    (resolve, reject) => {
      overwolf.games.getLastRunningGameInfo((result) => {
        if (result.success) {
          resolve(result.gameInfo);
        } else {
          reject(result.error);
        }
      });
    },
  ), []);

  const getGameDBInfo = useCallback((id: GameID) => new Promise<GameDBInfo>(
    (resolve, reject) => {
      overwolf.games.getGameDBInfo(Number(id), (result) => {
        if (result.success) {
          resolve(result);
        } else {
          reject(result.error);
        }
      });
    },
  ), []);

  return {
    getGameInfo,
    getRecentlyPlayed,
    getLastRunningGame,
    getGameDBInfo,
  };
}
