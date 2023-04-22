import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../prisma/prisma";

export async function POST(request: NextRequest) {
  const { messages } = await request.json();
  const chat = await prisma.chat.create({
    data: {messages,},
  });

  return NextResponse.json(chat);
}

export async function GET(_request: NextRequest) {
  const chats = await prisma.chat.findMany();
  return NextResponse.json(chats);
}