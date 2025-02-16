'use client';

import { motion } from 'framer-motion';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { News } from '@/types/news';
import Link from 'next/link';
import Image from 'next/image';

type NewsCardProps = {
  news: News;
  index: number;
};

export default function NewsCard({ news, index }: NewsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Link 
        href={`/news/${news.id}`}
        className="group block bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 focus-within:ring-2 focus-within:ring-blue-500"
        aria-label={`${news.title}の詳細を読む`}
      >
        {news.image && (
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={news.image.url}
              alt={`${news.title}のサムネイル画像`}
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
            <CalendarIcon className="h-4 w-4 mr-1" aria-hidden="true" />
            <time dateTime={news.publishedAt}>
              {new Date(news.publishedAt).toLocaleDateString('ja-JP')}
            </time>
          </div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
            {news.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 line-clamp-2 text-sm leading-relaxed">
            {news.content.replace(/<[^>]*>/g, '')}
          </p>
          <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
            続きを読む
            <svg
              className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}