'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export const Navigation = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleInternalNavigation = useCallback((href: string) => {
    setIsOpen(false);
    router.push(href);
  }, [router]);

  const menuItems = [
    { href: '/', label: 'HOME' },
    { href: '/news', label: 'NEWS' },
    { href: '/partners', label: 'PARTNERS' },
    { href: '/about', label: 'ABOUT' },
    { 
      href: 'https://sunlady.base.shop/', 
      label: 'SHOP',
      isExternal: true 
    },
    { 
      href: 'https://www.google.com/maps/search/?api=1&query=東京都渋谷区恵比寿西1-32-11+ヴァイスハイム+3F', 
      label: 'ACCESS',
      isExternal: true 
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm dark:bg-gray-900/80' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <button
              onClick={() => handleInternalNavigation('/')}
              className="focus:outline-none focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg transition-shadow duration-300"
            >
              <Image
                src="/sunlady-partner-logo.svg"
                alt="Sunlady ロゴ"
                width={160}
                height={40}
                priority
                className="h-8 w-auto dark:brightness-0 dark:invert"
              />
            </button>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {menuItems.map((item) => (
              item.isExternal ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium relative group transition-all duration-300 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none focus:ring-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative">
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-900 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
                </a>
              ) : (
                <button
                  key={item.href}
                  onClick={() => handleInternalNavigation(item.href)}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium relative group transition-all duration-300 focus:outline-none focus:ring-0 ${
                    pathname === item.href
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                  }`}
                >
                  <span className="relative">
                    {item.label}
                    <span className={`absolute -bottom-1 left-0 h-[1px] bg-gray-900 dark:bg-white transition-all duration-300 ${
                      pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </span>
                </button>
              )
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 transition-all duration-300"
            >
              <span className="sr-only">{isOpen ? "メニューを閉じる" : "メニューを開く"}</span>
              <motion.svg
                animate={isOpen ? "open" : "closed"}
                className="block h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                item.isExternal ? (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium relative group transition-all duration-300 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="flex items-center relative">
                      {item.label}
                      <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-900 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                ) : (
                  <button
                    key={item.href}
                    onClick={() => handleInternalNavigation(item.href)}
                    className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium relative group transition-all duration-300 focus:outline-none focus:ring-0 ${
                      pathname === item.href
                        ? 'text-gray-900 dark:text-white'
                        : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                    }`}
                  >
                    <span className="flex items-center relative">
                      {item.label}
                      <span className={`absolute -bottom-1 left-0 h-[1px] bg-gray-900 dark:bg-white transition-all duration-300 ${
                        pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                    </span>
                  </button>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}; 