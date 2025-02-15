import { NextResponse, type NextRequest } from 'next/server';
import { headers } from 'next/headers';
import { LRUCache } from 'lru-cache';

// レート制限の設定
const rateLimit = new LRUCache({
  max: 500,
  ttl: 60 * 1000, // 1分
});

// CSPポリシーの定義
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval';
  style-src 'self' 'unsafe-inline';
  img-src 'self' https://images.microcms-assets.io data:;
  font-src 'self';
  connect-src 'self' https://api.microcms.io;
  frame-ancestors 'none';
  form-action 'self';
`.replace(/\s{2,}/g, ' ').trim();

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // CSPヘッダーの設定
  response.headers.set('Content-Security-Policy', cspHeader);
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // APIエンドポイントに対するレート制限
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0] : request.headers.get('x-real-ip') ?? 'anonymous';
    const tokenCount = (rateLimit.get(ip) as number) || 0;

    if (tokenCount > 50) { // 1分間に50リクエストまで
      return new NextResponse(JSON.stringify({ error: 'Too many requests' }), {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': '60',
        },
      });
    }

    rateLimit.set(ip, tokenCount + 1);
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}; 