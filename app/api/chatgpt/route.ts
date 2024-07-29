import { NextResponse } from "next/server";
import OpenAI from "openai";

export const POST = async (request: Request) => {
  const { question } = await request.json();
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  try {
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
          "You are a knowlegeable assistant that provides quality information.",
        },
        {
          role: "user",
          content: `Tell me ${question}`,
          
        },
      ],
      model: "gpt-3.5-turbo",
    });

    return NextResponse.json({
      reply: chatCompletion.choices[0].message.content,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};