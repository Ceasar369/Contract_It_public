import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, businessName, email, trade, cityProvince, experience } = body;

    // Validate required fields
    if (!fullName || !email || !trade || !cityProvince) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create the waitlist entry
    const entry = await prisma.proWaitlist.create({
      data: {
        fullName,
        businessName: businessName || null,
        email,
        trade,
        cityProvince,
        experience: experience || null,
      },
    });

    return NextResponse.json(
      { success: true, id: entry.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating pro waitlist entry:", error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}

