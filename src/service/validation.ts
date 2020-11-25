import {BodyPutSchema as BodyPutSchemaInterface} from '../../types/bodyPut'
import {BodyGetSchema as BodyGetSchemaInterface} from '../../types/bodyGet'
import {coupon } from '../entity/coupon'
import {sendget} from './caller'

//import { FastifyInstance } from "fastify";


export async function validput(dbobj, reqbdy: BodyPutSchemaInterface ) {
    console.log(" Printing Reqbdy", reqbdy )
    console.log("SERVER DB OBJECT", dbobj)

    const coupon1 = new coupon();
    coupon1.cpnid = reqbdy.cpnid
    coupon1.cpnname = reqbdy.cpnname
    coupon1.discount = reqbdy.discount
    coupon1.location = reqbdy.location
    await dbobj.coupon.save(coupon1);    

    return { Validation : "success"}

}

export async function validget(dbobj, reqbdy: BodyGetSchemaInterface ) {
    console.log(" Printing Reqbdy", reqbdy )
    console.log("SERVER DB OBJECT", dbobj)
    return { Validation : "success"}

}

export async function vlaidtest(a:number, b:string) {
     let finalvalue = await sendget()
     return finalvalue

}