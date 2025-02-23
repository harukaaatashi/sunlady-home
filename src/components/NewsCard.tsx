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
    <Link 
      href={`/news/${news.id}`}
      aria-label={`${news.title}の詳細を読む`}
      className="block w-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
      >
        <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300">
          {news.image && (
            <div className="relative aspect-[16/9] w-full overflow-hidden flex-shrink-0">
              <Image
                src={news.image.url}
                alt={`${news.title}のサムネイル画像`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          <CardHeader className="space-y-2">
            <div className="flex items-center text-muted-foreground text-xs sm:text-sm">
              <CalendarIcon className="h-4 w-4 mr-1 flex-shrink-0" aria-hidden="true" />
              <time dateTime={news.publishedAt}>
                {new Date(news.publishedAt).toLocaleDateString('ja-JP')}
              </time>
            </div>
            <CardTitle className="text-base sm:text-lg line-clamp-2">
              {news.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription className="line-clamp-2 text-xs sm:text-sm leading-relaxed">
              {plainContent}
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="ml-auto p-0 h-auto hover:bg-transparent">
              続きを読む
              <ChevronRight className="ml-1 w-4 h-4" />
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </Link>
  );
}