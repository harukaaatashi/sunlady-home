'use client';

import { motion } from 'framer-motion';
import { News } from '@/types/news';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

type NewsCardProps = {
  news: News;
  index: number;
};

export default function NewsCard({ news, index }: NewsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut', delay: index * 0.04 }}
      className="h-full"
    >
      <Link href={`/news/${news.id}`} className="block group h-full">
        <Card className="overflow-hidden hover:border-primary/30 transition-colors duration-200 h-full flex flex-col">
          <CardContent className="p-0 flex flex-col flex-1">
            <div className="relative aspect-video bg-primary">
              {news.image?.url ? (
                <Image
                  src={news.image.url}
                  alt={news.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/hero-logo.svg"
                    alt=""
                    width={120}
                    height={120}
                    className="brightness-0 invert opacity-90 w-1/3 h-auto"
                    aria-hidden="true"
                  />
                </div>
              )}
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <time className="text-sm text-muted-foreground" dateTime={news.publishedAt}>
                {new Date(news.publishedAt).toLocaleDateString('ja-JP')}
              </time>
              <h2 className="mt-2 text-base font-medium line-clamp-2 group-hover:text-primary transition-colors">
                {news.title}
              </h2>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}