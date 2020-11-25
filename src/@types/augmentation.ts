import * as fastify from "fastify";

import { Db } from "../plugins/db";
declare module "fastify" {
export interface FastifyInstance {
    db: Db;
  }
}