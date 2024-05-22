import { connectDB } from "@/helper/db";
import { Users } from "@/helper/models/users";
import { NextResponse } from "next/server";


connectDB();

export async function GET() {
    let user = []

    try {
        user = await Users.find()
        return NextResponse.json(user)

    } catch (error) {
        return NextResponse.json({
            message: `${error} while fetching Data`
        })
    }
}

export async function POST(req) {

    const { name, email, password, role } = await req.json()

    const users = new Users({
        name: name,
        email: email,
        password: password,
        role: role
    })

    try {
        const createdUser = await users.save()

        return NextResponse.json({
            message: `user ${createdUser}  created`,
            status: 200
        })

    } catch (error) {
        return NextResponse.json({
            message: `${error} while posting data`,
            status: 400
        })
    }
}