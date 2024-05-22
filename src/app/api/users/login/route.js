import { connectDB } from "@/helper/db";
import { Users } from "@/helper/models/users";
import { NextResponse } from "next/server";
import bycryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

connectDB();

export async function POST(req) {
    const { email, password } = await req.json()

    try {
        const user = await Users.findOne({ email })
        if (user) {
            if (bycryptjs.compare(user.password === password)) {
                const tokenData = {
                    id: user._id
                }
                const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: '1d' })
                return NextResponse.json({ message: "Login Success", token: token }, { status: 200 })
            }
            else {
                return NextResponse.json({ message: "Password Incorrect" }, { status: 401 })
            }
        }
        else {
            return NextResponse("User not found", { status: 404 })
        }
    } catch (error) {
        return NextResponse.json({
            message: "error While Login" + error
        })
    }
}