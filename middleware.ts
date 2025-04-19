// import { NextRequest, NextResponse } from "next/server";
// import { totalNoOfVisitor } from "./app/api/increaseUser/prom-client/prom";


// export function middleware(req: NextRequest) {
//     const pathName = req.nextUrl.pathname;
//     console.log('==== Middleware Execution Start ====');
//     console.log(`Request URL: ${req.nextUrl.toString()}`);
//     console.log(`Tracking visitor for path: ${pathName}`);
    
//     totalNoOfVisitor.inc({
//         path: pathName
//     });
    
//     console.log('Metric increment completed');
//     console.log('==== Middleware Execution End ====');
    
//     return NextResponse.next();
// }

// export const config = {
//     matcher: ['/:path*'],
//     runtime: 'nodejs'
// };
