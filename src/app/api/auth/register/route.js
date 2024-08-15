import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import prisma from "@/libs/prisma";

export async function POST(request) {
   try{
    const data = await request.json()

    const userFound = await prisma.User.findUnique({
         where: {
             email: data.email
         }
     })
 
     if (userFound) {
         return NextResponse.json({
             message: "User already exist"
         }, {
             status: 400
         })
     }
 
     console.log(data);
     const hashPassword = await bcrypt.hash(data.password, 10)
    const newUser = await prisma.User.create({
         data:{
             name: data.name,
             email: data.email,
             password: hashPassword
         }
     })
 
     const {password: _, ...User} = newUser
 
     return NextResponse.json(User)

   }catch (error) {
    return NextResponse.json({
        message: error.message,
    },{
        status: 500
    })
   }
    
}