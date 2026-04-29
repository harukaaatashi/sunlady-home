import { Container } from '@/components/ui/container';
import AboutContent from './AboutContent';

export default function AboutPage() {
  return (
    <Container className="py-12 sm:py-16">
      <h1 className="text-4xl font-light mb-8">会社概要</h1>
      <AboutContent />
    </Container>
  );
} 