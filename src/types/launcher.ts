export type LauncherInfo = overwolf.games.launchers.LauncherInfo;

export enum LauncherID {
  LEAGUE_OF_LEGENDS = '10902',
}

export type LauncherIDValues = `${LauncherID}`;
export type LauncherFeature = {
  '10902':
  | 'game_flow'
  | 'summoner_info'
  | 'champ_select'
  | 'lobby_info'
  | 'end_game'
  | 'lcu_info'
  | 'clash';
};
