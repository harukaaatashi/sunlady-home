import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  basePath: string;
};

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      <Button
        variant="outline"
        size="icon"
        asChild
        disabled={currentPage <= 1}
      >
        <Link
          href={`${basePath}?page=${currentPage - 1}`}
          aria-disabled={currentPage <= 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Link>
      </Button>
      
      {[...Array(totalPages)].map((_, i) => (
        <Button
          key={i}
          variant={currentPage === i + 1 ? "default" : "outline"}
          size="sm"
          asChild
        >
          <Link href={`${basePath}?page=${i + 1}`}>
            {i + 1}
          </Link>
        </Button>
      ))}

      <Button
        variant="outline"
        size="icon"
        asChild
        disabled={currentPage >= totalPages}
      >
        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          aria-disabled={currentPage >= totalPages}
        >
          <ChevronRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
} 