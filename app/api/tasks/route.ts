import prisma from "@/app/utils/connect";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({
        error: "Unauthroised",
        status: 401,
      });
    }
    const { title, description, date, completed, important } = await req.json();

    if (!title || !description || !date) {
      return NextResponse.json({
        error: "Missing required fields",
        status: 400,
      });
    }

    if (title.length < 3) {
      return NextResponse.json({
        error: "Title must be at least 3 characters long",
        status: 400,
      });
    }

    const task = await prisma.task.create({
      data: {
        title,
        description,
        date,
        isCompleted: completed,
        isImportant: important,
        userId,
      },
    });
    console.log(task);
    return NextResponse.json(task);
  } catch (err) {
    console.log("Error At Creating Task", err);
    return NextResponse.json({
      error: "Error At Creating Task",
      status: 500,
    });
  }
}

export async function GET(req: Request) {
  try {
  } catch (err) {
    console.log("Error At Getting Task", err);
    return NextResponse.json({
      error: "Error At Getting Task",
      status: 500,
    });
  }
}

export async function PUT(req: Request) {
  try {
  } catch (err) {
    console.log("Error At updateing Task", err);
    return NextResponse.json({
      error: "Error At updateing Task",
      status: 500,
    });
  }
}

export async function DELETE(req: Request) {
  try {
  } catch (err) {
    console.log("Error At Deleting Task", err);
    return NextResponse.json({
      error: "Error At Deleting Task",
      status: 500,
    });
  }
}
