import { NextRequest, NextResponse } from "next/server" 
import { PrismaClient } from "@prisma/client"

export async function GET(){
    const prisma = new PrismaClient()
    const categories = await prisma.category.findMany({
        include: {
            products: true
        }
    })
    return NextResponse.json(categories)
}

// export async function POST(){
//     const prisma = new PrismaClient()
//     await prisma.POST()
// }