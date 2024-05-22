import { connectDB } from "@/helper/db";
import { Users } from "@/helper/models/users";
import { NextResponse } from "next/server";


connectDB()

export async function POST(req) {
    try {
        const reqBody = await req.json()
        const { token } = reqBody
        console.log(token);

        const user = await Users.findOne({ verifyToken: token, verifyTokenExpiry: { $gt: Date.now() } })

        if (!user) {
            return NextResponse.json({
                status: false,
                error: "Invalid Token"
            }, {
                status: 401
            })
        }
        console.log(user);

        user.isVerified = true
        user.verifyToken = undefined
        user.verifyTokenExpiry = undefined


        await user.save()
        return NextResponse.json({
            message: "Email Verified"
        }, {
            status: 200
        })

    } catch (error) {
        return NextResponse.json({
            error: error.message
        }, { status: 500 })
    }
}