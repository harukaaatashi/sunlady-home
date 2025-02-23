'use client';

import { BuildingOfficeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: '会社概要 | Sunlady Home',
  description: 'Sunlady Homeの会社概要ページです。',
};

export default function AboutPage() {
  return (
    <Container className="py-12 sm:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-8 text-center">会社概要</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-full lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BuildingOfficeIcon className="h-6 w-6" />
                会社情報
              </CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <dt className="font-semibold">会社名</dt>
                  <dd>ファッション ディレクト サンレディ</dd>
                </div>
                <div>
                  <dt className="font-semibold">設立</dt>
                  <dd>1968年</dd>
                </div>
                <div>
                  <dt className="font-semibold">代表者</dt>
                  <dd>代表取締役 田代修一</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="font-semibold">事業内容</dt>
                  <dd>
                    <ul className="list-disc list-inside space-y-1">
                      <li>ファッションショーおよびイベント企画制作運営</li>
                      <li>アパレル企画およびODM業務</li>
                      <li>企業プロモーション・PRおよびキャスティング業務</li>
                      <li>人材育成プログラム</li>
                      <li>ビジネスマナー研修</li>
                      <li>接客接遇講座</li>
                      <li>就職面接対策</li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPinIcon className="h-6 w-6" />
                アクセス
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <dt className="font-semibold">住所</dt>
                  <dd>〒150-0021<br />東京都渋谷区恵比寿1-32-11<br />ヴァイスハイム 3F</dd>
                </div>
                <div>
                  <dt className="font-semibold">最寄り駅</dt>
                  <dd>JR恵比寿駅 徒歩5分</dd>
                </div>
                <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                  <Image
                    src="/images/map.jpg"
                    alt="サンレディ本社の地図"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ClockIcon className="h-6 w-6" />
                営業時間
              </CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-4">
                <div>
                  <dt className="font-semibold">営業時間</dt>
                  <dd>10:00 - 19:00</dd>
                </div>
                <div>
                  <dt className="font-semibold">定休日</dt>
                  <dd>土日祝日</dd>
                </div>
                <div>
                  <dt className="font-semibold">電話番号</dt>
                  <dd>03-3496-5922</dd>
                </div>
                <div>
                  <dt className="font-semibold">FAX</dt>
                  <dd>03-3496-5923</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </Container>
  );
} 