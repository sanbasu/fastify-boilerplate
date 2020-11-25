"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.log = void 0;
var pino_1 = __importDefault(require("pino"));
var conf = require("../config/config.json");
exports.log = pino_1["default"]({
    name: 'Template',
    level: conf.loglevel
});
