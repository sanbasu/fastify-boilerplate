/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Config {
  "dbConn":{
    "dbtype" :"postgres",
    "dburl" : "postgres://postgres:admin@localhost:5432/postgres",
    "dblog" : false
  },

  "service": {
      "srbaseURL" : "https://jsonplaceholder.typicode.com",
      "srtimeout" : 100

  }
}