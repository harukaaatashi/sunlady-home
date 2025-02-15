import { NextResponse, type NextRequest } from 'next/server';
import { headers } from 'next/headers';
import { LRUCache } from 'lru-cache';
import helmet from 'helmet';

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
  connect-src 'self' https://api.microcms.io https://*.sentry.io;
  frame-ancestors 'none';
  form-action 'self';
  upgrade-insecure-requests;
`.replace(/\s{2,}/g, ' ').trim();

// セキュリティヘッダーの設定
const securityHeaders = {
  'Content-Security-Policy': cspHeader,
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'X-Permitted-Cross-Domain-Policies': 'none',
  'X-DNS-Prefetch-Control': 'off',
};

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // セキュリティヘッダーの設定
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  // APIエンドポイントに対するレート制限
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0] : request.headers.get('x-real-ip') ?? 'anonymous';
    const tokenCount = (rateLimit.get(ip) as number) || 0;

    if (tokenCount > 50) { // 1分間に50リクエストまで
      return new NextResponse(JSON.stringify({ 
        error: 'Too many requests',
        retryAfter: 60,
      }), {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': '60',
          'X-RateLimit-Limit': '50',
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': String(Math.floor(Date.now() / 1000) + 60),
        },
      });
    }

    rateLimit.set(ip, tokenCount + 1);
    response.headers.set('X-RateLimit-Limit', '50');
    response.headers.set('X-RateLimit-Remaining', String(50 - (tokenCount + 1)));
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