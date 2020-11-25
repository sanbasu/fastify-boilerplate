"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
require("reflect-metadata");
var fastify_1 = __importDefault(require("fastify"));
var app_1 = __importDefault(require("./app"));
var db_1 = __importDefault(require("./plugins/db"));
var fastify_swagger_1 = __importDefault(require("fastify-swagger"));
// Import Swagger Options
var swagger = require('./config/swagger.js');
var logger_1 = require("./service/logger");
//import { server as graphqlServer } from './graphql/server';
var server = fastify_1["default"]({
    logger: logger_1.log
});
/* Database */
server.register(fastify_swagger_1["default"], swagger.options);
server.register(db_1["default"]);
/* Routes */
server.register(app_1["default"]);
/* GRAPHQL */
//server.register(graphqlServer.createHandler());
server.listen(3000, function (err, address) {
    server.swagger();
    console.log("SERVER ready");
    logger_1.log.info("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS");
    logger_1.log.warn("WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW");
    if (err) {
        server.log.error(err);
        process.exit(1);
    }
    server.log.info("server listening on " + address);
});
