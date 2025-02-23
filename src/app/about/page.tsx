import { Container } from '@/components/ui/container';
import AboutMap from '@/components/AboutMap';

export default function AboutPage() {
  return (
    <Container className="py-8">
      <h1>会社概要</h1>
      <div className="mt-8">
        <AboutMap />
      </div>
    </Container>
  );
} 