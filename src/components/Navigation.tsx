'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from '@/lib/utils';

export const Navigation = () => {
  const pathname = usePathname();
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
      href: 'https://sunladytokyo.stores.jp/',
      label: 'SHOP',
      isExternal: true 
    },
    // DESIGN.md § 5.3: 以前は Google Maps への外部リンクで、押すとサイトから離脱していた。
    // 見せている最中の離脱を避けるため、トップページの情報ブロックへ飛ばす。
    { href: '/#access', label: 'ACCESS' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            {/* DESIGN.md § 3.2: ロゴ画像は h-8 だが、当たり判定は 44px 確保する */}
            <Link href="/" className="flex items-center min-h-[44px] py-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg">
              {/* SVG の実寸は 150x150（正方形）。160x40 は誤りだった */}
              <Image
                src="/sunlady-partner-logo.svg"
                alt="株式会社ファッション ディレクト サンレディ"
                width={150}
                height={150}
                priority
                unoptimized
                className="h-11 w-11 dark:brightness-0 dark:invert"
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
                          // DESIGN.md § 6.2: ホバーは背景ではなく下線で反応させる
                          'group inline-flex items-center hover:bg-transparent focus:bg-transparent'
                        )}
                      >
                        <span className="link-underline">{item.label}</span>
                        <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
                      </NavigationMenuLink>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          'hover:bg-transparent focus:bg-transparent',
                          pathname === item.href && 'bg-accent text-accent-foreground'
                        )}
                      >
                        <span className="link-underline">{item.label}</span>
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
                {/* DESIGN.md § 3.2: モバイルの主要導線なのでタップ領域 44px を確保 */}
                <Button variant="ghost" size="icon" className="h-11 w-11">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">メニューを開く</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetTitle className="sr-only">ナビゲーションメニュー</SheetTitle>
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