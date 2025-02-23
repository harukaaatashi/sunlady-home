import { Container } from '@/components/ui/container';
import AboutContent from '@/components/AboutContent';

export default function AboutPage() {
  return (
    <Container className="py-8">
      <h1 className="text-4xl font-light mb-12">会社概要</h1>
      <AboutContent />
    </Container>
  );
} 