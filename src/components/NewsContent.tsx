'use client';

import { News } from '@/types/news';
import { motion } from 'framer-motion';
import NewsCard from './NewsCard';
import Pagination from './Pagination';

type NewsContentProps = {
  news: News[];
  currentPage: number;
  totalPages: number;
};

export default function NewsContent({ news, currentPage, totalPages }: NewsContentProps) {
  return (
    <div className="py-12">
      <motion.h1
        className="text-4xl font-light mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        ニュース一覧
      </motion.h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {news.map((item, index) => (
          <NewsCard key={item.id} news={item} index={index} />
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