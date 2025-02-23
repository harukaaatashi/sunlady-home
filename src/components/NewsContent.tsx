'use client';

import { News } from '@/types/news';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { formatDate } from '@/lib/utils';
import Pagination from '@/components/Pagination';
import Link from 'next/link';

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
      className="py-12 sm:py-16"
    >
      <h1 className="text-3xl font-bold mb-8 text-center">ニュース</h1>
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((item, index) => (
          <Link 
            key={item.id} 
            href={`/news/${item.id}`}
            className="block group"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
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
            </motion.div>
          </Link>
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