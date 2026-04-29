import { Container } from '@/components/ui/container';
import AboutContent from './AboutContent';

export default function AboutPage() {
  return (
    <Container className="py-12 sm:py-16">
      <h1 className="text-lg font-light tracking-widest uppercase text-foreground/80 mb-8">About</h1>
      <AboutContent />
    </Container>
  );
} 