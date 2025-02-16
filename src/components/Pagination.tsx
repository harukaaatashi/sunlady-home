import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  basePath: string;
};

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      <Link
        href={`${basePath}?page=${currentPage - 1}`}
        className={`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
          currentPage <= 1 ? 'pointer-events-none opacity-50' : ''
        }`}
        aria-disabled={currentPage <= 1}
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </Link>
      
      {[...Array(totalPages)].map((_, i) => (
        <Link
          key={i}
          href={`${basePath}?page=${i + 1}`}
          className={`px-3 py-1 rounded-lg transition-colors ${
            currentPage === i + 1
              ? 'bg-blue-600 text-white'
              : 'hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          {i + 1}
        </Link>
      ))}

      <Link
        href={`${basePath}?page=${currentPage + 1}`}
        className={`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
          currentPage >= totalPages ? 'pointer-events-none opacity-50' : ''
        }`}
        aria-disabled={currentPage >= totalPages}
      >
        <ChevronRightIcon className="h-5 w-5" />
      </Link>
    </div>
  );
} 