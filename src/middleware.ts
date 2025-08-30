// middleware.ts (at project root)
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const COMING_SOON_PATH = '/coming-soon';

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Allow Next internals, APIs, and typical static assets
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/static') ||
        pathname.startsWith('/assets') ||
        pathname.startsWith('/favicon') ||
        pathname.startsWith('/robots') ||
        pathname.startsWith('/sitemap') ||
        /\.[a-zA-Z0-9]+$/.test(pathname) // any file with an extension
    ) {
        return NextResponse.next();
    }

    // Allow the coming soon page itself
    if (pathname === COMING_SOON_PATH) {
        return NextResponse.next();
    }

    // Rewrite everything else to /coming-soon (keeps the URL in the bar)
    const url = req.nextUrl.clone();
    url.pathname = COMING_SOON_PATH;
    return NextResponse.rewrite(url);
}

// Optional: also gate with a matcher to skip most known exclusions
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|_next/data|favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest|assets|static|coming-soon).*)',
    ],
};
