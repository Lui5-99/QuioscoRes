import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET() {
  try {
    const prisma = new PrismaClient();
    const orders = await prisma.order.findMany({
      where:{
        status: false,
      }
    })
    return NextResponse.json(orders);
  } catch (error) {
    console.log(error)
  }
}

export async function POST(request) {
  try {
    const prisma = new PrismaClient();
    const data = await request.json();
    console.log(data);
    const order = await prisma.order.create({
      data: data,
    });
    let json_response = {
      status: "success",
      data: {
        order,
      },
    };
    return new NextResponse(JSON.stringify(json_response), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    let error_response = {
      status: "error",
      message: error.message,
    };
    return new NextResponse(JSON.stringify(error_response), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
