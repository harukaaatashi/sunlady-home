'use client';

import { Metadata } from 'next';
import { BuildingOffice2Icon, MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '会社概要 | Sunlady Home',
  description: 'Sunladyの企業理念、ビジョン、会社概要をご紹介します。',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* ヘッダーセクション */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-4">
            <BuildingOffice2Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            会社概要
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            1968年の創業以来、ファッション業界における革新的なソリューションを提供し続けています。
          </p>
        </div>

        {/* ミッションセクション */}
        <motion.section 
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 sm:p-12 rounded-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-900 dark:text-blue-100">
              企業理念
            </h2>
            <p className="text-blue-800 dark:text-blue-200 text-xl sm:text-2xl font-medium leading-relaxed mb-8">
              「ファッションを通じて、人々の生活に彩りと喜びを」
            </p>
            <p className="text-blue-700 dark:text-blue-300 text-lg leading-relaxed max-w-3xl mx-auto">
              Sunladyは、ファッション業界における革新的なソリューションの提供を通じて、
              お客様のビジネスの成功と社会の発展に貢献してまいりました。
              私たちは、常に最新のトレンドと技術を取り入れながら、
              確かな品質とサービスを提供し続けることで、
              お客様との長期的な信頼関係を築いています。
            </p>
          </div>
        </motion.section>

        {/* 企業情報セクション */}
        <motion.section 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            企業情報
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden">
            <dl className="divide-y divide-gray-100 dark:divide-gray-700">
              <div className="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-8 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <dt className="text-sm font-medium text-gray-900 dark:text-white">社名</dt>
                <dd className="mt-1 text-sm text-gray-700 dark:text-gray-300 sm:col-span-2 sm:mt-0">
                  株式会社　ファッション ディレクト サンレディ
                </dd>
              </div>
              <div className="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-8 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <dt className="text-sm font-medium text-gray-900 dark:text-white">所在地</dt>
                <dd className="mt-1 text-sm text-gray-700 dark:text-gray-300 sm:col-span-2 sm:mt-0">
                  〒150-0021<br />
                  東京都渋谷区恵比寿西1-32-11 ヴァイスハイム 3F
                </dd>
              </div>
              <div className="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-8 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <dt className="text-sm font-medium text-gray-900 dark:text-white">TEL</dt>
                <dd className="mt-1 text-sm text-gray-700 dark:text-gray-300 sm:col-span-2 sm:mt-0">
                  03-3462-2751
                </dd>
              </div>
              <div className="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-8 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <dt className="text-sm font-medium text-gray-900 dark:text-white">FAX</dt>
                <dd className="mt-1 text-sm text-gray-700 dark:text-gray-300 sm:col-span-2 sm:mt-0">
                  03-3462-2750
                </dd>
              </div>
              <div className="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-8 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <dt className="text-sm font-medium text-gray-900 dark:text-white">営業時間</dt>
                <dd className="mt-1 text-sm text-gray-700 dark:text-gray-300 sm:col-span-2 sm:mt-0">
                  平日 9:00 - 18:00
                </dd>
              </div>
              <div className="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-8 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <dt className="text-sm font-medium text-gray-900 dark:text-white">アクセス</dt>
                <dd className="mt-1 text-sm text-gray-700 dark:text-gray-300 sm:col-span-2 sm:mt-0">
                  JR恵比寿駅西口より徒歩5分<br />
                  東京メトロ日比谷線恵比寿駅より徒歩7分
                </dd>
              </div>
            </dl>
          </div>
        </motion.section>

        {/* 地図セクション */}
        <motion.section 
          className="max-w-4xl mx-auto mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden">
            <div className="aspect-video relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.2775528378527!2d139.70742631525905!3d35.64734988020197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b40c5aa0693%3A0x3c3c6c1d6f0a8f8c!2z44CSMTUwLTAwMjEg5p2x5Lqs6YO95riL6LC35Yy65rOJ5q-U5a-_6KW_77yR5LiB55uu77yT77yS4oiS77yR77yRIOODtOOCoeOCpOOCueODj-OCpOODoA!5e0!3m2!1sja!2sjp!4v1645577758619!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
} 