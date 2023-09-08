import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(req, { params }) {
  const prisma = new PrismaClient();
  const orders = await prisma.order.findFirst({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(orders);
}

export async function PUT(req, { params }) {
  const prisma = new PrismaClient();
  const data = await req.json();
  const updatedOrders = await prisma.order.update({
    where: {
        id: Number(params.id)
    },
    data: data,
  })
  let json_response = {
    status: "success",
    data: {
      Orders: updatedOrders,
    },
  };
  return NextResponse.json(json_response);
}
