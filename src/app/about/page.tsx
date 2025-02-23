import dynamic from 'next/dynamic';
import { Container } from '@/components/ui/container';

// Google Mapsをダイナミックインポート
const GoogleMap = dynamic(() => import('@/components/GoogleMap'), {
  loading: () => <div className="aspect-[16/9] w-full bg-muted rounded-lg animate-pulse" />,
  ssr: false
});

export default function AboutPage() {
  return (
    <Container className="py-8">
      <h1>会社概要</h1>
      <div className="mt-8">
        <GoogleMap />
      </div>
    </Container>
  );
} 