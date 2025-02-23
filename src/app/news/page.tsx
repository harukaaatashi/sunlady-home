'use client';

import { client } from '@/libs/microcms';
import { News } from '@/types/news';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { NewspaperIcon } from '@heroicons/react/24/outline';
import { Suspense } from 'react';
import Pagination from '@/components/Pagination';
import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';

export const metadata = {
  title: 'ニュース一覧 | Sunlady Home',
  description: 'Sunladyの最新ニュースをお届けします。イベント情報、プレスリリースなどを掲載しています。',
};

export const revalidate = 60; // 1分ごとに再検証

const PER_PAGE = 6;

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

async function getNewsList(page: number) {
  try {
    const response = await client.getList<News>({
      endpoint: 'news',
      queries: {
        orders: '-publishedAt',
        limit: PER_PAGE,
        offset: (page - 1) * PER_PAGE,
      },
    });
    return {
      contents: response.contents,
      totalCount: response.totalCount,
    };
  } catch (error) {
    console.error('ニュースの取得に失敗しました:', error);
    return {
      contents: [],
      totalCount: 0,
    };
  }
}

function LoadingNews() {
  return (
    <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
      {[...Array(6)].map((_, index) => (
        <Card key={index} className="animate-pulse">
          <CardContent className="p-3 sm:p-4">
            <div className="aspect-[16/9] mb-3 sm:mb-4 bg-gray-200 dark:bg-gray-700 rounded-lg w-full" />
            <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-1/3" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default async function NewsPage({ searchParams }: Props) {
  const pageParam = await searchParams?.page;
  const currentPage = typeof pageParam === 'string' ? Number(pageParam) : 1;
  const { contents: news, totalCount } = await getNewsList(currentPage);
  const totalPages = Math.ceil(totalCount / PER_PAGE);

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-8 text-center">ニュース</h1>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <Card key={item.id} className="group overflow-hidden">
              <CardContent className="p-3 sm:p-4">
                <div className="aspect-[16/9] mb-3 sm:mb-4 bg-muted rounded-lg overflow-hidden">
                  <Image
                    src={item.image.url}
                    alt={item.title}
                    width={item.image.width}
                    height={item.image.height}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-2">
                  {item.description}
                </CardDescription>
                <div className="mt-2 text-xs text-muted-foreground">
                  {formatDate(item.publishedAt)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          basePath="/news"
        />
      </motion.div>
    </Container>
  );
} 