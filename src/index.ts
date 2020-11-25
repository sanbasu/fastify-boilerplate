import 'reflect-metadata';
import fastify from 'fastify';
import app from './app';
import db1 from './plugins/db'
import fastifySwagger from 'fastify-swagger'
// Import Swagger Options
const swagger = require('./config/swagger.js')

import {log} from './service/logger'

//import { server as graphqlServer } from './graphql/server';

const server = fastify({
   logger: log 
  });
/* Database */
server.register(fastifySwagger, swagger.options)
 server.register(db1);

 /* Routes */
 server.register(app);
 
 /* GRAPHQL */
 //server.register(graphqlServer.createHandler());

  server.listen(3000, function (err, address) {
  server.swagger()
  console.log("SERVER ready")
  log.info("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS")
  log.warn("WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW")
  
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
  server.log.info(`server listening on ${address}`)
})