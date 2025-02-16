import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'パートナー | Sunlady Home',
  description: 'Sunladyのパートナーをご紹介。共に成長し、価値を創造するビジネスパートナーとして、多くの企業様と協力関係を築いています。',
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 