export type RunningGameInfo = overwolf.games.GetRunningGameInfoResult2GameInfo;
export type GameInfo = overwolf.games.InstalledGameInfo;
export type GameDBInfo = {
  gameInfo?: overwolf.games.GameInfo;
  installedGameInfo?: GameInfo;
};
export type MajorFrameRateChangeEvent = overwolf.games.MajorFrameRateChangeEvent;

export enum GameID {
  APEX_LEGENDS = '21566',
  CALL_OF_DUTY_WARZONE = '21626',
  CS_GO = '7764',
  DOTA_2 = '7314',
  DOTA_UNDERLORDS = '21586',
  ESCAPE_FROM_TARCOV = '21634',
  ETERNAL_RETURN = '21566',
  FINAL_FANTASY_XIV = '6350',
  FOOTBALL_MANAGER_2021 = '21666',
  FOOTBALL_MANAGER_2022 = '21856',
  FORTNITE = '21216',
  HALO_INFINITE = '21854',
  HEARTHSTONE = '9898',
  HEROES_OF_THE_STORM = '10624',
  HUNT_SHOWDOWN = '21328',
  LEGENDS_OF_RUNETERRA = '21620',
  LEAGUE_OF_LEGENDS = '5426',
  MAKER_KING = '21850',
  MINECRAFT = '8032',
  MTG_ARENA = '21308',
  NEW_WORLD = '21816',
  OVERWATCH = '10844',
  PATH_OF_EXILE = '7212',
  PUBG = '10906',
  RAINBOW_SIX_SIEGE = '10826',
  ROCKET_LEAGUE = '10798',
  STARCRAFT_II = '5855',
  SPLITGAME_ARENA_WARFARE = '21404',
  TEAMFIGHT_TACTICS = '5426',
  VALHEIM = '21668',
  VALORANT = '21640',
  WORLD_OF_TANKS = '6365',
  WORLD_OF_WARCRAFT = '765',
  WORLD_OF_WARSHIPS = '10746',
  WARFRAME = '8954',
}

export type GameIDValues = `${GameID}`;
export type GameFeature = {
  '21566':
  | 'gep_internal'
  | 'me'
  | 'team'
  | 'kill'
  | 'damage'
  | 'death'
  | 'revive'
  | 'match_state'
  | 'match_info'
  | 'inventory'
  | 'location'
  | 'match_summary'
  | 'roster'
  | 'rank'
  | 'kill_feed';
  '21626': 'gep_internal' | 'match_info' | 'game_info' | 'kill' | 'death';
  '7764':
  | '  gep_internal'
  | 'match_info'
  | 'kill'
  | 'death'
  | 'assist'
  | 'headshot'
  | 'round_start'
  | 'match_start'
  | 'match_info'
  | 'match_end'
  | 'team_round_win'
  | 'bomb_planted'
  | 'bomb_change'
  | 'reloading'
  | 'fired'
  | 'weapon_change'
  | 'weapon_acquired'
  | 'info'
  | 'roster'
  | 'player_activity_change'
  | 'team_set'
  | 'replay';
  '7314':
  | 'gep_internal'
  | 'game_state_changed'
  | 'match_state_changed'
  | 'match_detected'
  | 'daytime_changed'
  | 'clock_time_changed'
  | 'ward_purchase_cooldown_changed'
  | 'match_ended'
  | 'kill'
  | 'assist'
  | 'death'
  | 'cs'
  | 'xpm'
  | 'gpm'
  | 'gold'
  | 'hero_leveled_up'
  | 'hero_respawned'
  | 'hero_buyback_info_changed'
  | 'hero_boughtback'
  | 'hero_health_mana_info'
  | 'hero_status_effect_changed'
  | 'hero_attributes_skilled'
  | 'hero_ability_skilled'
  | 'hero_ability_used'
  | 'hero_ability_cooldown_changed'
  | 'hero_ability_changed'
  | 'hero_item_cooldown_changed'
  | 'hero_item_changed'
  | 'hero_item_used'
  | 'hero_item_consumed'
  | 'hero_item_charged'
  | 'match_info'
  | 'roster'
  | 'party'
  | 'error'
  | 'hero_pool'
  | 'me'
  | 'game';
  '21586': 'gep_internal' | 'match_info';
  '21634': 'gep_internal' | 'match_info' | 'game_info';
  '21672':
  | 'gep_internal'
  | 'me'
  | 'match_info'
  | 'matching'
  | 'character_selection'
  | 'kills'
  | 'announces'
  | 'game_objects'
  | 'day_change'
  | 'move_regions'
  | 'scoreboards'
  | 'damages'
  | 'level_ups'
  | 'routes'
  | 'equipments'
  | 'restriction_timers'
  | 'match_ends';
  '6350': 'gep_internal' | 'match_info';
  '21666': 'gep_internal' | 'match_info';
  '21856': 'gep_internal' | 'match_info';
  '21216':
  | 'gep_internal'
  | 'kill'
  | 'killed'
  | 'killer'
  | 'revived'
  | 'death'
  | 'match'
  | 'match_info'
  | 'rank'
  | 'me'
  | 'phase'
  | 'location'
  | 'team'
  | 'items'
  | 'counters';
  '21854':
  | 'gep_internal'
  | 'game_info'
  | 'match_info'
  | 'kill'
  | 'assist'
  | 'death'
  | 'roster';
  '9898':
  | 'gep_internal'
  | 'scene_state'
  | 'collection'
  | 'decks'
  | 'match'
  | 'match-info'
  | 'arena';
  '10624':
  | 'gep_internal'
  | 'match_info'
  | 'me'
  | 'game_info'
  | 'roster'
  | 'death'
  | 'kill';
  '21328': 'gep_internal' | 'match_info';
  '21620': 'game_client_data';
  '5426':
  | 'gep_internal'
  | 'live_client_data'
  | 'matchState'
  | 'match_info'
  | 'death'
  | 'respawn'
  | 'abilities'
  | 'kill'
  | 'assist'
  | 'gold'
  | 'minions'
  | 'summoner_info'
  | 'gameMode'
  | 'teams'
  | 'level'
  | 'announcer'
  | 'counters'
  | 'damage'
  | 'heal'
  | 'jungle_camps'
  | 'gep_internal'
  | 'live_client_data'
  | 'me'
  | 'match_info'
  | 'roster'
  | 'store'
  | 'board'
  | 'bench'
  | 'carousel';
  '21850': '';
  '8032':
  | 'gep_internal'
  | 'game_info'
  | 'match_info'
  | 'mods'
  | 'counters';
  '21308':
  | 'gep_internal'
  | 'game_info'
  | 'match_info';
  '21816':
  | 'gep_internal'
  | 'match_info';
  '10844':
  | 'gep_internal'
  | 'game_info'
  | 'match_info'
  | 'kill'
  | 'death';
  '7212':
  | 'gep_internal'
  | 'kill'
  | 'death'
  | 'me'
  | 'match_info';
  '10906':
  | 'gep_internal'
  | 'kill'
  | 'revived'
  | 'death'
  | 'killer'
  | 'match'
  | 'match_info'
  | 'rank'
  | 'counters'
  | 'location'
  | 'me'
  | 'team'
  | 'phase'
  | 'map'
  | 'roster';
  '10826':
  | 'gep_internal'
  | 'game_info'
  | 'match'
  | 'match_info'
  | 'roster'
  | 'kill'
  | 'death'
  | 'me'
  | 'defuser';
  '10798':
  | 'gep_internal'
  | 'stats'
  | 'teamGoal'
  | 'opposingTeamGoal'
  | 'match'
  | 'roster'
  | 'me'
  | 'match_info'
  | 'death'
  | 'game_info';
  '5855': 'gep_internal' | 'match_info';
  '21404':
  | 'gep_internal'
  | 'game_info'
  | 'match_info'
  | 'player'
  | 'location'
  | 'match'
  | 'feed'
  | 'connection'
  | 'kill'
  | 'death'
  | 'portal'
  | 'assist';
  '21668':
  | 'gep_internal'
  | 'game_info'
  | 'kill';
  '21640':
  | 'gep_internal'
  | 'me'
  | 'game_info'
  | 'match_info'
  | 'kill'
  | 'death';
  '6365':
  | 'gep_internal'
  | 'kill'
  | 'death'
  | 'game_info'
  | 'match_info';
  '765':
  | 'gep_internal'
  | 'game_info'
  | 'addons';
  '10746':
  | 'gep_internal'
  | 'game_info'
  | 'account_info'
  | 'match'
  | 'match_info'
  | 'kill'
  | 'death';
  '8954':
  | 'gep_internal'
  | 'game_info'
  | 'match_info';
};
