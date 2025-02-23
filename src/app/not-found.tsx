import { Container } from '@/components/ui/container';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileQuestion } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Container className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileQuestion className="h-5 w-5" />
            ページが見つかりません
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-muted-foreground">
            申し訳ありませんが、お探しのページは見つかりませんでした。
            URLが正しいかご確認ください。
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild variant="default" className="w-full">
            <Link href="/">
              トップページに戻る
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </Container>
  );
} 