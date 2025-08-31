// middleware.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const COMING_SOON_PATH = '/coming-soon';

const IS_ENABLED = process.env.ENABLE_COMING_SOON === 'true';
const IS_PROD = process.env.NODE_ENV === 'production';

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Only run in prod when explicitly enabled
    if (!(IS_ENABLED && IS_PROD)) {
        return NextResponse.next();
    }

    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/static') ||
        pathname.startsWith('/assets') ||
        pathname.startsWith('/favicon') ||
        pathname.startsWith('/robots') ||
        pathname.startsWith('/sitemap') ||
        /\.[a-zA-Z0-9]+$/.test(pathname)
    ) {
        return NextResponse.next();
    }

    if (pathname === COMING_SOON_PATH) {
        return NextResponse.next();
    }

    const url = req.nextUrl.clone();
    url.pathname = COMING_SOON_PATH;
    return NextResponse.rewrite(url);
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|_next/data|favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest|assets|static|coming-soon).*)',
    ],
};
