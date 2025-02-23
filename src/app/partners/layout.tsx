import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'パートナー企業 | Sunlady Home',
  description: 'Sunladyのパートナー企業をご紹介します。',
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 