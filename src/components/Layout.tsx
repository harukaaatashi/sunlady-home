import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Navigation } from './Navigation';
import Link from 'next/link';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
    >
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 mt-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      </main>
      <footer className="bg-white border-t mt-12 sm:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-4">会社情報</h3>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">株式会社FDサンレディ</p>
                <p className="text-sm text-gray-600">〒150-0021</p>
                <p className="text-sm text-gray-600">東京都渋谷区恵比寿西1-32-11</p>
                <p className="text-sm text-gray-600">ヴァイスハイム 3F</p>
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-4">アクセス</h3>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">JR恵比寿駅西口より徒歩5分</p>
                <p className="text-sm text-gray-600">東京メトロ日比谷線恵比寿駅より徒歩7分</p>
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-4">お問い合わせ</h3>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">お気軽にお問い合わせください</p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  お問い合わせフォーム
                  <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8">
            <p className="text-center text-sm text-gray-500">© 2024 Sunlady. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
} 