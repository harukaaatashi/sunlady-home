'use client';

import dynamic from 'next/dynamic';

const GoogleMap = dynamic(() => import('@/components/GoogleMap'), {
  loading: () => <div className="aspect-[16/9] w-full bg-muted rounded-lg animate-pulse" />,
  ssr: false
});

export default function AboutMap() {
  return <GoogleMap />;
} 