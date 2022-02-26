# react-overwolf-hooks
[![NPM](https://img.shields.io/npm/v/react-overwolf-hooks.svg)](https://www.npmjs.com/package/react-overwolf-hooks)

## Install
```bash
npm install --save react-overwolf-hooks
```
## Examples

#### Fetching Launcher Events
```typescript
const event = useLauncherEvents(LauncherID.LEAGUE_OF_LEGENDS, [
    'lcu_info',
    'game_flow',
    'summoner_info',
    'end_game',
  ]);
```

#### Encryption
```typescript
const { encrypt } = useCryptography();
const encryptedStr = usePromise(encrypt("text_to_encrypt"));
```

## Progress
- [ ] benchmarking
- [x] campaigns
- [x] cryptography
- [x] extensions
- [x] games
- [x] io
- [ ] logitech
- [ ] media
- [ ] notifications
- [x] os
- [ ] profile
- [ ] settings
- [ ] social
- [ ] streaming
- [ ] tobii
- [ ] utils
- [ ] web
- [ ] windows
