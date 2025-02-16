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
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">所在地</h3>
              <p className="text-sm sm:text-base text-gray-600">〒150-0021</p>
              <p className="text-sm sm:text-base text-gray-600">東京都渋谷区恵比寿西1-32-11 ヴァイスハイム 3F</p>
              <p className="text-sm sm:text-base text-gray-600 mt-2">JR恵比寿駅西口より徒歩5分</p>
              <p className="text-sm sm:text-base text-gray-600">東京メトロ日比谷線恵比寿駅より徒歩7分</p>
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