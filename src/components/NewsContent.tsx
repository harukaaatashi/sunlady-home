'use client';

import { News } from '@/types/news';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Pagination from '@/components/Pagination';

type NewsContentProps = {
  news: News[];
  currentPage: number;
  totalPages: number;
};

export default function NewsContent({ news, currentPage, totalPages }: NewsContentProps) {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-light mb-12">ニュース一覧</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {news.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/news/${item.id}`} className="block group">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <Image
                      src={item.image.url}
                      alt={item.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <time className="text-sm text-muted-foreground" dateTime={item.publishedAt}>
                      {new Date(item.publishedAt).toLocaleDateString('ja-JP')}
                    </time>
                    <h2 className="mt-2 text-lg font-medium line-clamp-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h2>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <Pagination currentPage={currentPage} totalPages={totalPages} basePath="/news" />
        </div>
      )}
    </div>
  );
} 