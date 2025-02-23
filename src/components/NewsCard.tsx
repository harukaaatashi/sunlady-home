'use client';

import { motion } from 'framer-motion';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { News } from '@/types/news';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

// HTMLタグを除去する関数
function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, '');
}

type NewsCardProps = {
  news: News;
  index: number;
};

export default function NewsCard({ news, index }: NewsCardProps) {
  // 本文からHTMLタグを除去
  const plainContent = stripHtmlTags(news.content);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/news/${news.id}`} className="block group">
        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-0">
            <div className="relative aspect-video">
              <Image
                src={news.image.url}
                alt={news.title}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <time className="text-sm text-muted-foreground" dateTime={news.publishedAt}>
                {new Date(news.publishedAt).toLocaleDateString('ja-JP')}
              </time>
              <h2 className="mt-2 text-lg font-medium line-clamp-2 group-hover:text-primary transition-colors">
                {news.title}
              </h2>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}