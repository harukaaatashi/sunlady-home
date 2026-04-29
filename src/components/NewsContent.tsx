'use client';

import { News } from '@/types/news';
import { motion } from 'framer-motion';
import NewsCard from './NewsCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

type NewsContentProps = {
  news: News[];
  currentPage: number;
  totalPages: number;
};

function NewsContent({ news, currentPage, totalPages }: NewsContentProps) {
  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    const halfVisible = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // 最初のページ
    if (startPage > 1) {
      pages.push(
        <Button key={1} variant="outline" size="sm" asChild>
          <Link href={`/news?page=1`}>1</Link>
        </Button>
      );
      if (startPage > 2) {
        pages.push(
          <Button key="start-ellipsis" variant="ghost" size="sm" disabled>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        );
      }
    }

    // ページ番号
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <Button
          key={i}
          variant={currentPage === i ? "default" : "outline"}
          size="sm"
          asChild
        >
          <Link href={`/news?page=${i}`}>{i}</Link>
        </Button>
      );
    }

    // 最後のページ
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <Button key="end-ellipsis" variant="ghost" size="sm" disabled>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        );
      }
      pages.push(
        <Button key={totalPages} variant="outline" size="sm" asChild>
          <Link href={`/news?page=${totalPages}`}>{totalPages}</Link>
        </Button>
      );
    }

    return pages;
  };

  return (
    <div className="py-12">
      <motion.h1
        className="text-lg font-light tracking-widest uppercase text-foreground/80 mb-10"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        News
      </motion.h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {news.map((item, index) => (
          <NewsCard key={item.id} news={item} index={index} />
        ))}
      </div>
      {totalPages > 1 && (
        <nav className="flex justify-center items-center gap-2 mt-8" aria-label="ページネーション">
          <Button
            variant="outline"
            size="icon"
            asChild
            disabled={currentPage <= 1}
          >
            <Link
              href={`/news?page=${currentPage - 1}`}
              aria-label="前のページ"
              aria-disabled={currentPage <= 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Link>
          </Button>
          
          {renderPageNumbers()}

          <Button
            variant="outline"
            size="icon"
            asChild
            disabled={currentPage >= totalPages}
          >
            <Link
              href={`/news?page=${currentPage + 1}`}
              aria-label="次のページ"
              aria-disabled={currentPage >= totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </nav>
      )}
    </div>
  );
}

export default NewsContent; 