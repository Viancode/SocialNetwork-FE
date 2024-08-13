import {NextResponse} from "next/server";

export function middleware(request) {
    const accessToken = request.cookies.get("access-token")?.value;
    const refreshToken = request.cookies.get("refresh-token")?.value;
    const callbackUrl = request.nextUrl.pathname;

    // Kiểm tra xem route hiện tại có yêu cầu xác thực không
    if (isPublicRoute(request.nextUrl.pathname)) {
        return NextResponse.next();
    }

    if (!accessToken && !refreshToken) {
        // return NextResponse.redirect(new URL(`/login?callbackUrl=${callbackUrl}`, request.url));
        return NextResponse.redirect(new URL(`/login`, request.url));
    }

    // Nếu có ít nhất một trong hai token, cho phép request tiếp tục
    return NextResponse.next();
}

function isPublicRoute(pathname) {
    const publicRoutes = ["/login", "/register", "/reset-password", "/register/verify", "/forgot_password", "/forgot_password/verify"];
    return publicRoutes.includes(pathname);
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};