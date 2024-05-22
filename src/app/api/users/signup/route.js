import { connectDB } from "@/helper/db";
import { Users } from "@/helper/models/users";
import { NextResponse } from "next/server";
import bycryptjs from 'bcryptjs'
import { sendEmail } from "@/helper/mailer";


connectDB()


export async function POST(req) {
    try {
        const reqBody = await req.json()
        const { username, email, password } = reqBody
        console.log(reqBody);

        const user = await Users.findOne({ email })

        if (user) {
            return NextResponse.json({
                error: "User Already Exists"
            }, {
                status: 400
            })
        }

        const salt = await bycryptjs.genSalt(10)

        const hasedPassword = await bycryptjs.hash(password, salt)

        const newUser = await new Users({
            username: username,
            password: hasedPassword,
            email: email
        })

        const savedUser = await newUser.save()

        console.log(savedUser);


        //send verification email

        await sendEmail({ email, emailType: 'VERIFY', userId: savedUser._id })

        return NextResponse.json({
            message: "User Created Successfully",
            success: true,
            user: savedUser
        })
    } catch (error) {
        return NextResponse.json({
            error: ` error ${error.message}`
        }, {
            status: 500
        })
    }
}