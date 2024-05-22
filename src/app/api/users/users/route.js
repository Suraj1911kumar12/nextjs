import { connectDB } from "@/helper/db";
import { Users } from "@/helper/models/users";
import { NextResponse } from "next/server";
import bycryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'


connectDB();


export async function GET() {
    try {
        const users = await Users.find();
        return NextResponse.json({
            message: users
        }, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json({
            status: false,
        }, {
            error: error.message
        })
    }
}