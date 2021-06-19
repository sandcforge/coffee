import {envConfig} from '../server/constants.js';
console.log(envConfig.nodeEnv);
const localWsBase = envConfig.nodeEnv == 'development' ? `http://localhost:3000` : `http://localhost:${envConfig.port}`;
export const APP_CONST = {
  WS_BASE: localWsBase,
};