import { News } from '@/types/news';
import { Partner } from '@/types/partner';

const now = new Date().toISOString();

export const mockNews: News[] = [
  {
    id: 'mock-news-1',
    title: '【サンプル】2024年春夏コレクション展示会のお知らせ',
    description: '今シーズンの新作を一堂に集めた展示会を開催いたします。',
    content: '<p>展示会の詳細はお問い合わせください。</p>',
    publishedAt: now,
    revisedAt: now,
    updatedAt: now,
    createdAt: now,
  },
  {
    id: 'mock-news-2',
    title: '【サンプル】新パートナーブランドのご紹介',
    description: '国内外の優れたブランドとの新たなパートナーシップが始まりました。',
    content: '<p>詳細は後日お知らせいたします。</p>',
    publishedAt: now,
    revisedAt: now,
    updatedAt: now,
    createdAt: now,
  },
  {
    id: 'mock-news-3',
    title: '【サンプル】会社情報を更新しました',
    description: '会社概要ページの情報を最新の内容に更新しました。',
    content: '<p>最新情報をご確認ください。</p>',
    publishedAt: now,
    revisedAt: now,
    updatedAt: now,
    createdAt: now,
  },
];

export const mockPartners: Partner[] = [
  {
    id: 'mock-partner-1',
    name: 'サンプルブランド A',
    subtitle: 'ファッション・アパレル',
    description: 'トレンドを先取りするファッションブランドです。',
    image: { url: 'https://placehold.co/400x300/1C2788/ffffff?text=Brand+A', width: 400, height: 300 },
    homelink: '#',
  },
  {
    id: 'mock-partner-2',
    name: 'サンプルブランド B',
    subtitle: 'アクセサリー',
    description: '洗練されたデザインのアクセサリーを展開しています。',
    image: { url: 'https://placehold.co/400x300/1C2788/ffffff?text=Brand+B', width: 400, height: 300 },
    homelink: '#',
  },
  {
    id: 'mock-partner-3',
    name: 'サンプルブランド C',
    subtitle: 'ライフスタイル',
    description: '上質なライフスタイルを提案するブランドです。',
    image: { url: 'https://placehold.co/400x300/1C2788/ffffff?text=Brand+C', width: 400, height: 300 },
  },
];
