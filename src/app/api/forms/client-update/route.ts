import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, type, message } = body;

    // Validate required fields
    if (!name || !email || !type) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate type
    const validTypes = ["Client", "Partner", "Other"];
    if (!validTypes.includes(type)) {
      return NextResponse.json(
        { error: "Invalid type" },
        { status: 400 }
      );
    }

    // Create the client update entry
    const entry = await prisma.clientUpdate.create({
      data: {
        name,
        email,
        type,
        message: message || null,
      },
    });

    return NextResponse.json(
      { success: true, id: entry.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating client update entry:", error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}

