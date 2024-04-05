import { NextRequest } from "next/server"
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();
export async function POST(req: NextRequest){
    //extract the body
    const body = await req.json();
    //store the body in the database
    console.log(body);
    await client.user.create({
        data:{
            username: body.username,
         password:body.password
        }
    })
    return Response.json({
        message: "you are logged in"
    })
}
// export function GET(){
//     //database logic
//     console.log('get called')
//     return Response.json({
//         email:"abc@gmail.com",
//         name:"harkirat"
//     })
// }