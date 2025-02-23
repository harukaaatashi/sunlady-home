import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '会社概要 | Sunlady Home',
  description: 'Sunlady Homeの会社概要ページです。',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 