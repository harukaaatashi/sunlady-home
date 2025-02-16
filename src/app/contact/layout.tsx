import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お問い合わせ | Sunlady',
  description: 'サンレディへのお問い合わせはこちらから。ご質問、ご相談、お見積もりなど、お気軽にお問い合わせください。',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 