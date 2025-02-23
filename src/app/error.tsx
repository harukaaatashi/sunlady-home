'use client';

import { useEffect } from 'react';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // 本番環境でのエラーログ
    if (process.env.NODE_ENV === 'production') {
      // エラーの詳細情報をログサービスに送信
      console.error('Error occurred:', {
        message: error.message,
        digest: error.digest,
        timestamp: new Date().toISOString(),
      });
    }
  }, [error]);

  return (
    <Container className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <AlertCircle className="h-5 w-5" />
            エラーが発生しました
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-muted-foreground">
            {process.env.NODE_ENV === 'development' ? (
              error.message
            ) : (
              '申し訳ありませんが、エラーが発生しました。しばらく時間をおいて再度お試しください。'
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={reset} variant="default" className="w-full">
            もう一度試す
          </Button>
        </CardFooter>
      </Card>
    </Container>
  );
} 