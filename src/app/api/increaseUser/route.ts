import { NextRequest, NextResponse } from "next/server";
import { totalNoOfVisitor } from "./prom-client/prom";

export async function POST(req: NextRequest) {
    const { path } = await req.json()
    totalNoOfVisitor.inc({
        path: path
    })

    return NextResponse.json({
        path,
    })
}