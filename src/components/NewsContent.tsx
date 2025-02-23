import { News } from '@/types/news';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import Pagination from '@/components/Pagination';
import NewsCard from './NewsCard';

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