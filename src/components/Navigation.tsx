'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from '@/lib/utils';

export const Navigation = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

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
        scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="focus:outline-none focus:ring-2 focus:ring-primary rounded-lg">
              <Image
                src="/sunlady-partner-logo.svg"
                alt="Sunlady ロゴ"
                width={160}
                height={40}
                priority
                className="h-8 w-auto dark:brightness-0 dark:invert"
              />
            </Link>
          </div>

          <div className="hidden md:flex md:items-center">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    {item.isExternal ? (
                      <NavigationMenuLink
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          navigationMenuTriggerStyle(),
                          'group inline-flex items-center'
                        )}
                      >
                        {item.label}
                        <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
                      </NavigationMenuLink>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          pathname === item.href && 'bg-accent text-accent-foreground'
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">メニューを開く</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4">
                  {menuItems.map((item) => (
                    item.isExternal ? (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-2 py-1 text-lg font-medium transition-colors hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                        <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
                      </a>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex items-center px-2 py-1 text-lg font-medium transition-colors hover:text-primary",
                          pathname === item.href && "text-primary"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}; 