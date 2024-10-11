import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        message: "This API request was successful!",
        status: "success",
    });
}
