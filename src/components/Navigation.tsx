'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navigation = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const menuItems = [
    { href: '/news', label: 'NEWS' },
    { href: '/partners', label: 'PARTNERS' },
    { href: '/about', label: 'ABOUT' },
    { href: '/shop', label: 'SHOP' },
    { 
      href: 'https://www.google.com/maps/search/?api=1&query=東京都渋谷区恵比寿西1-32-11+ヴァイスハイム+3F', 
      label: 'ACCESS',
      isExternal: true 
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <motion.svg
                  width="40"
                  height="40"
                  viewBox="0 0 1000 1000"
                  whileHover={{ scale: 1.05 }}
                  className="transition-transform"
                >
                  <path
                    fill="#e60012"
                    d="M641.6431759,218.7412894c30.6544789,0,55.6057812-24.9513023,55.6057812-55.6057676s-24.9513023-55.6057608-55.6057812-55.6057608-55.6057812,24.9513091-55.6057812,55.6057608,24.9513023,55.605754,55.6057812,55.6057676Z"
                  />
                  <path
                    fill="#1c2788"
                    d="M414.9427773,339.2204322c9.2676211-65.2298169,31.7238041-125.8258504,46.3381601-161.1141263h101.9439141c-16.3965919,39.9220864-38.4963059,99.448754-46.6946018,168.2430698-8.5547105,72.3587604,46.6946018,243.096936,55.6057812,340.7634949,5.3467076,57.7444317-32.4367148,158.2625788-51.3283716,196.4023614h-105.151917c18.8917112-57.3880171,52.7541929-125.1129806,51.3283716-191.7685916-2.4951194-114.0630964-62.3782558-283.0190633-52.397724-352.1698209l.3563873-.3563873Z"
                  />
                </motion.svg>
              </div>
              <span className="ml-2 text-lg font-semibold tracking-tight text-gray-900">
                Sunlady
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item) => (
                item.isExternal ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 text-gray-600 hover:bg-gray-50 hover:text-blue-600`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isOpen}
            >
              <span className="sr-only">メニューを開く</span>
              <motion.svg
                animate={isOpen ? "open" : "closed"}
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </motion.svg>
            </button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
              {menuItems.map((item) => (
                item.isExternal ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium transition-colors text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}; 