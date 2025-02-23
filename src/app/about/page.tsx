'use client';

import { BuildingOfficeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <Container className="py-12 sm:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-3xl font-bold mb-12 text-center">会社概要</h1>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="md:col-span-2">
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-2">
                <BuildingOfficeIcon className="h-6 w-6" />
                会社情報
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <dt className="font-semibold text-lg mb-2">会社名</dt>
                  <dd className="text-muted-foreground">株式会社ファッション ディレクト サンレディ</dd>
                </div>
                <div>
                  <dt className="font-semibold text-lg mb-2">設立</dt>
                  <dd className="text-muted-foreground">1968年</dd>
                </div>
                <div>
                  <dt className="font-semibold text-lg mb-2">代表者</dt>
                  <dd className="text-muted-foreground">代表取締役 田代修一</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="font-semibold text-lg mb-2">事業内容</dt>
                  <dd>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
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
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-2">
                <MapPinIcon className="h-6 w-6" />
                アクセス
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <dt className="font-semibold text-lg mb-2">住所</dt>
                  <dd className="text-muted-foreground">〒150-0021<br />東京都渋谷区恵比寿1-32-11<br />ヴァイスハイム 3F</dd>
                </div>
                <div>
                  <dt className="font-semibold text-lg mb-2">最寄り駅</dt>
                  <dd className="space-y-2 text-muted-foreground">
                    <p>東急東横線 代官山駅 徒歩約3分</p>
                    <p>JR山手線 恵比寿駅 徒歩約4分</p>
                    <p>東京メトロ日比谷線 恵比寿駅 徒歩約4分</p>
                  </dd>
                </div>
                <div className="aspect-[16/9] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.1876115670584!2d139.70862687677598!3d35.64748293127649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b40c3c1ea21%3A0x9fdd8d9f5f9c3ea7!2z44CSMTUwLTAwMjEg5p2x5Lqs6YO95riL6LC35Yy65oiQ5q2j5a-65YWr77yR5LiB55uu77yT77yS4oiS77yR77yR!5e0!3m2!1sja!2sjp!4v1710921881099!5m2!1sja!2sjp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-2">
                <ClockIcon className="h-6 w-6" />
                営業時間
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <dl className="space-y-6">
                <div>
                  <dt className="font-semibold text-lg mb-2">営業時間</dt>
                  <dd className="text-muted-foreground">10:00 - 18:00</dd>
                </div>
                <div>
                  <dt className="font-semibold text-lg mb-2">定休日</dt>
                  <dd className="text-muted-foreground">土日祝日</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </Container>
  );
} 