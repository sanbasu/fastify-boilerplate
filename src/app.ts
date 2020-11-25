import fastifyCors from 'fastify-cors';
import { FastifyInstance } from "fastify";
import BodyPutSchema  from  '../schemas/bodyPut.json';
import {BodyPutSchema as BodyPutSchemaInterface} from '../types/bodyPut'
import BodyGetSchema  from  '../schemas/bodyGet.json';
import {BodyGetSchema as BodyGetSchemaInterface} from '../types/bodyGet'
import {validget, validput, vlaidtest} from './service/validation'
import { Server } from 'http';

export default function(fastify: FastifyInstance, opts, done) {
   fastify.register(fastifyCors);

    fastify.post<{ 
        Body: BodyPutSchemaInterface,
        }>('/updcpn', 
        {
            schema: {
              body : BodyPutSchema  
            } 
        },
        async (request, reply) => {
        const reqbdy = request.body
        const dbobj = fastify.db
        let finalvalue = await validput(dbobj, reqbdy)

        return finalvalue
      });


      fastify.post<{ 
        Body: BodyGetSchemaInterface
        }>('/getcpn', 
        {
            schema: {
              body : BodyGetSchema  
            } 
        },
        async (request, reply) => {
        const reqbdy = request.body
        const dbobj = fastify.db
        let finalvalue = await validget(dbobj, reqbdy)
        return finalvalue
      });


      
      fastify.get('/getone', 
        
        async (request, reply) => {
        //const reqbdy = request.body
      //  const dbobj = fastify.db
        const a:number = 1
        const b:string = "success"

       /* let finalvalue = await vlaidtest(a, b) */
        
        return {user : 1, test :  "Messages are coming"}
      });

      done()

}