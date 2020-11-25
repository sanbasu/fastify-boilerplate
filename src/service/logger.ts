import  pino from "pino";
const conf = require("../config/config.json")

export const log = pino({
  name: 'Template',
  level: conf.loglevel
});