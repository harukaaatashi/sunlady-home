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
          <div className="flex space-x-8 items-center">
            <Link href="/" className="flex items-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 1000 1000"
                className="mr-2"
              >
                <path
                  fill="#e60012"
                  d="M641.6431759,218.7412894c30.6544789,0,55.6057812-24.9513023,55.6057812-55.6057676s-24.9513023-55.6057608-55.6057812-55.6057608-55.6057812,24.9513091-55.6057812,55.6057608,24.9513023,55.605754,55.6057812,55.6057676Z"
                />
                <path
                  fill="#1c2788"
                  d="M414.9427773,339.2204322c9.2676211-65.2298169,31.7238041-125.8258504,46.3381601-161.1141263h101.9439141c-16.3965919,39.9220864-38.4963059,99.448754-46.6946018,168.2430698-8.5547105,72.3587604,46.6946018,243.096936,55.6057812,340.7634949,5.3467076,57.7444317-32.4367148,158.2625788-51.3283716,196.4023614h-105.151917c18.8917112-57.3880171,52.7541929-125.1129806,51.3283716-191.7685916-2.4951194-114.0630964-62.3782558-283.0190633-52.397724-352.1698209l.3563873-.3563873Z"
                />
              </svg>
              <span className={`text-sm font-medium ${
                isActive('/') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}>
                HOME
              </span>
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