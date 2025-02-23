import Link from 'next/link';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  basePath: string;
};

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
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
          <Link href={`${basePath}?page=1`}>1</Link>
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
          <Link href={`${basePath}?page=${i}`}>{i}</Link>
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
          <Link href={`${basePath}?page=${totalPages}`}>{totalPages}</Link>
        </Button>
      );
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <nav className="flex justify-center items-center gap-2 mt-8" aria-label="ページネーション">
      <Button
        variant="outline"
        size="icon"
        asChild
        disabled={currentPage <= 1}
      >
        <Link
          href={`${basePath}?page=${currentPage - 1}`}
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
          href={`${basePath}?page=${currentPage + 1}`}
          aria-label="次のページ"
          aria-disabled={currentPage >= totalPages}
        >
          <ChevronRight className="h-4 w-4" />
        </Link>
      </Button>
    </nav>
  );
} 