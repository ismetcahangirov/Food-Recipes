import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(req) {
    const users = await prisma.user.findMany()
    return new Response(JSON.stringify(users), { status: 200 })
}

export async function POST(req) {
    const data = await req.json()
    const user = await prisma.user.create({
        data,
    })
    return new Response(JSON.stringify(user), { status: 201 })
}
