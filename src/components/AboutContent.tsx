'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BuildingOfficeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import AboutMap from './AboutMap';

export default function AboutContent() {
  return (
    <div className="space-y-12">
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6">企業理念</h2>
          <p className="text-lg leading-relaxed mb-8">
            ファッションを通じて、人々の生活に彩りと喜びを。
            私たちは、クリエイティブな発想とプロフェッショナルなサービスで、
            お客様のビジネスの成長をサポートします。
          </p>
        </motion.div>
      </section>

      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-6">会社情報</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BuildingOfficeIcon className="h-5 w-5" />
                  会社概要
                </CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-2">
                  <div>
                    <dt className="font-medium">社名</dt>
                    <dd>株式会社ファッション ディレクト サンレディ</dd>
                  </div>
                  <div>
                    <dt className="font-medium">設立</dt>
                    <dd>1990年4月</dd>
                  </div>
                  <div>
                    <dt className="font-medium">資本金</dt>
                    <dd>1,000万円</dd>
                  </div>
                  <div>
                    <dt className="font-medium">代表取締役</dt>
                    <dd>田代 晴香</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPinIcon className="h-5 w-5" />
                  所在地
                </CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-2">
                  <div>
                    <dt className="font-medium">本社</dt>
                    <dd>〒150-0021</dd>
                    <dd>東京都渋谷区恵比寿西1-32-11</dd>
                    <dd>TEL: 03-3496-2277</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ClockIcon className="h-5 w-5" />
                  営業時間
                </CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-2">
                  <div>
                    <dt className="font-medium">平日</dt>
                    <dd>9:30 - 18:30</dd>
                  </div>
                  <div>
                    <dt className="font-medium">定休日</dt>
                    <dd>土曜・日曜・祝日</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>

      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-6">アクセス</h2>
          <AboutMap />
        </motion.div>
      </section>
    </div>
  );
} 