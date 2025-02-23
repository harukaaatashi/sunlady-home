'use client';

import { News } from '@/types/news';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { formatDate } from '@/lib/utils';
import Pagination from '@/components/Pagination';

type NewsContentProps = {
  news: News[];
  currentPage: number;
  totalPages: number;
};

export default function NewsContent({ news, currentPage, totalPages }: NewsContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-8 text-center">ニュース</h1>
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((item) => (
          <Card key={item.id} className="group overflow-hidden">
            <CardContent className="p-3 sm:p-4">
              <div className="aspect-[16/9] mb-3 sm:mb-4 bg-muted rounded-lg overflow-hidden">
                <Image
                  src={item.image.url}
                  alt={item.title}
                  width={item.image.width}
                  height={item.image.height}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardTitle className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {item.title}
              </CardTitle>
              <CardDescription className="text-sm line-clamp-2">
                {item.description}
              </CardDescription>
              <div className="mt-2 text-xs text-muted-foreground">
                {formatDate(item.publishedAt)}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        basePath="/news"
      />
    </motion.div>
  );
} 