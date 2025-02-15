'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navigation = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link
              href="/"
              className={`inline-flex items-center px-3 py-2 text-sm font-medium ${
                isActive('/') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              HOME
            </Link>
            <Link
              href="/news"
              className={`inline-flex items-center px-3 py-2 text-sm font-medium ${
                isActive('/news') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              NEWS
            </Link>
            <Link
              href="/partners"
              className={`inline-flex items-center px-3 py-2 text-sm font-medium ${
                isActive('/partners') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              PARTNERS
            </Link>
            <Link
              href="/about"
              className={`inline-flex items-center px-3 py-2 text-sm font-medium ${
                isActive('/about') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              ABOUT
            </Link>
            <a
              href="https://sunlady.base.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-600"
            >
              SHOP
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}; 