import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '会社概要 | Sunlady Home',
  description: 'Sunladyの企業理念、ビジョン、会社概要をご紹介します。',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 