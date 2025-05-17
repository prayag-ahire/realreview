import { PrismaClient } from "@prisma/client";
import { Router } from "express";


const route = Router();
const prismaClient = new PrismaClient();

export const upload = route.post("/upload",async(req,res)=>{
    const data = req.body;
    const user = await prismaClient.imageMetaData.create({
        data:{
            location:data.location,
            time:data.time,
            userId:data.userid,
            image:data.image
        }
    })
    res.status(200).json({"message":"database updated"})
})

export const seeall = route.get("/all",async(req,res)=>{
    const user = await prismaClient.imageMetaData.findMany();
    res.status(200).json(user);
})



