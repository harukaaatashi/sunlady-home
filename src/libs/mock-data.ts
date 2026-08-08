import { News } from '@/types/news';
import { Partner } from '@/types/partner';

const now = new Date().toISOString();

const at = (isoDate: string) => new Date(isoDate).toISOString();

const image = (label: string) => ({
  url: `https://placehold.co/1200x675/1C2788/ffffff?text=${encodeURIComponent(label)}`,
  width: 1200,
  height: 675,
});

/**
 * 本番の実データに構成を合わせている（6件・うち5件に画像あり）。
 * トップページのグリッド2行と、画像未設定時のロゴフォールバックの
 * 両方をローカルで確認できるようにするための開発用フィクスチャ。
 */
export const mockNews: News[] = [
  {
    id: 'mock-news-1',
    title: '【サンプル】初の大阪 POPUP STORE を開催します',
    description: '自社ブランドのポップアップストアを大阪で開催いたします。',
    content: '<p>開催の詳細はお問い合わせください。</p>',
    image: image('POPUP STORE'),
    publishedAt: at('2026-05-03'),
    revisedAt: now,
    updatedAt: now,
    createdAt: now,
  },
  {
    id: 'mock-news-2',
    title: '【サンプル】年末年始休業のお知らせ',
    description: '年末年始の休業期間についてご案内いたします。',
    content: '<p>休業期間は下記のとおりです。</p>',
    image: image('Information'),
    publishedAt: at('2025-12-25'),
    revisedAt: now,
    updatedAt: now,
    createdAt: now,
  },
  {
    id: 'mock-news-3',
    title: '【サンプル】デザイン画コンテストを開催します（画像なしの表示確認用）',
    description: '若手デザイナー向けのデザイン画コンテストを開催いたします。',
    content: '<p>応募要項は後日公開いたします。</p>',
    publishedAt: at('2025-12-22'),
    revisedAt: now,
    updatedAt: now,
    createdAt: now,
  },
  {
    id: 'mock-news-4',
    title: '【サンプル】バリスタ大会の参加チーム募集を開始しました',
    description: 'コーヒーの技術を競うイベントの参加チームを募集します。',
    content: '<p>エントリーはお問い合わせフォームより承ります。</p>',
    image: image('Barista'),
    publishedAt: at('2025-11-08'),
    revisedAt: now,
    updatedAt: now,
    createdAt: now,
  },
  {
    id: 'mock-news-5',
    title: '【サンプル】書道展・舞踊公演を開催します',
    description: '書道と舞踊による公演を企画・運営いたします。',
    content: '<p>会場および日程は追ってお知らせいたします。</p>',
    image: image('Art'),
    publishedAt: at('2025-11-05'),
    revisedAt: now,
    updatedAt: now,
    createdAt: now,
  },
  {
    id: 'mock-news-6',
    title: '【サンプル】プレスリリースを公開しました',
    description: '自社ブランドの最新コレクションについて発表いたしました。',
    image: image('Press Release'),
    content: '<p>資料は下記よりご覧いただけます。</p>',
    publishedAt: at('2025-10-19'),
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
