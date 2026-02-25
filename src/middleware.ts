import { NextResponse, type NextRequest } from 'next/server';
import { LRUCache } from 'lru-cache';

// レート制限の設定（APIルート専用）
const rateLimit = new LRUCache({
  max: 500,
  ttl: 60 * 1000, // 1分
});

export async function middleware(request: NextRequest) {
  // APIエンドポイントに対するレート制限のみ実施
  // セキュリティヘッダーは next.config.js の headers() で設定済み
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
    const response = NextResponse.next();
    response.headers.set('X-RateLimit-Limit', '50');
    response.headers.set('X-RateLimit-Remaining', String(50 - (tokenCount + 1)));
    return response;
  }

  return NextResponse.next();
}

export const config = {
  // APIルートのみに適用（静的ファイルや通常ページは対象外）
  matcher: ['/api/:path*'],
};