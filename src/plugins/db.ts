import fp from "fastify-plugin"
import { createConnection, Repository } from "typeorm"
import { coupon } from "../entity/coupon"
const conf = require("../config/config.json")

export interface Db {
  coupon: Repository<coupon>;
}


export default fp(async server => {
  try {
    
    console.log(" waiting for connection")
    console.log(conf.dbConn.dbtype)
    const connection = await createConnection({
        type: conf.dbConn.dbtype,
       // url: "postgres://postgres:admin@localhost:5432/postgres",
        url : conf.dbConn.dburl,
        logging: false,
        entities: [coupon],
        });
    console.log("connection is created")

    // this object will be accessible from any fastify server instance
    server.decorate("db", {
      coupon : connection.getRepository(coupon),
      
      
    })
  } catch (error) {
    console.log(" connection failed")
    console.log(error)
  }
  
})
