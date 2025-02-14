import { motion } from 'framer-motion';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { News } from '@/types';

type NewsCardProps = {
  news: News;
  index: number;
};

export function NewsCard({ news, index }: NewsCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100"
    >
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <CalendarIcon className="h-4 w-4 mr-1" />
          <time>{new Date(news.publishedAt).toLocaleDateString('ja-JP')}</time>
        </div>
        <h3 className="text-xl font-medium text-gray-900 mb-2">{news.title}</h3>
        <p className="text-gray-600 line-clamp-2">{news.content}</p>
      </div>
    </motion.article>
  );
} 