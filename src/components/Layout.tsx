import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Navigation } from './Navigation';

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Sunlady</h3>
              <p className="text-sm sm:text-base text-gray-600">最高品質のサービスを提供し、お客様の満足を追求します。</p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">お問い合わせ</h3>
              <p className="text-sm sm:text-base text-gray-600">メール: info@sunlady.co.jp</p>
              <p className="text-sm sm:text-base text-gray-600">電話: 03-XXXX-XXXX</p>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">所在地</h3>
              <p className="text-sm sm:text-base text-gray-600">〒XXX-XXXX</p>
              <p className="text-sm sm:text-base text-gray-600">東京都XX区XX町X-X-X</p>
            </div>
          </div>
          <div className="border-t mt-6 sm:mt-8 pt-6 sm:pt-8">
            <p className="text-center text-sm text-gray-500">© 2024 Sunlady. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
} 