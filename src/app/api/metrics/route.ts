import { NextResponse } from "next/server";
import { totalNoOfVisitor } from "../increaseUser/prom-client/prom";

export async function POST(request: Request) {
    const { pathname } = await request.json();

    totalNoOfVisitor.inc({
        path: pathname
    });

    return NextResponse.json({ success: true });
}
