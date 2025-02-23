'use client';

import { BuildingOfficeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import dynamic from 'next/dynamic';

// Google Mapsをダイナミックインポート
const GoogleMap = dynamic(() => import('../../components/GoogleMap'), {
  loading: () => <div className="aspect-[16/9] w-full bg-muted rounded-lg animate-pulse" />,
  ssr: false
});

// アニメーション設定
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function AboutPage() {
  return (
    <Container className="py-8 sm:py-12 lg:py-16">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-5xl mx-auto"
      >
        <motion.h1 
          className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center"
          variants={itemVariants}
        >
          会社概要
        </motion.h1>

        <div className="grid gap-6 sm:gap-8">
          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden">
              <CardHeader className="border-b">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <BuildingOfficeIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                  会社情報
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <dt className="font-semibold text-base sm:text-lg mb-2">会社名</dt>
                    <dd className="text-muted-foreground text-sm sm:text-base">株式会社ファッション ディレクト サンレディ</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-base sm:text-lg mb-2">設立</dt>
                    <dd className="text-muted-foreground text-sm sm:text-base">1968年</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-base sm:text-lg mb-2">代表者</dt>
                    <dd className="text-muted-foreground text-sm sm:text-base">代表取締役 田代修一</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="font-semibold text-base sm:text-lg mb-2">事業内容</dt>
                    <dd>
                      <ul className="grid gap-2 text-sm sm:text-base text-muted-foreground sm:grid-cols-2">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>ファッションショーおよびイベント企画制作運営</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>アパレル企画およびODM業務</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>企業プロモーション・PRおよびキャスティング業務</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>人材育成プログラム</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>ビジネスマナー研修</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>接客接遇講座</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>就職面接対策</span>
                        </li>
                      </ul>
                    </dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <motion.div variants={itemVariants}>
              <Card className="h-full">
                <CardHeader className="border-b">
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <MapPinIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                    アクセス
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <dt className="font-semibold text-base sm:text-lg mb-2">住所</dt>
                      <dd className="text-muted-foreground text-sm sm:text-base">
                        〒150-0021<br />
                        東京都渋谷区恵比寿1-32-11<br />
                        ヴァイスハイム 3F
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-base sm:text-lg mb-2">最寄り駅</dt>
                      <dd className="space-y-2 text-muted-foreground text-sm sm:text-base">
                        <p>東急東横線 代官山駅 徒歩約3分</p>
                        <p>JR山手線 恵比寿駅 徒歩約4分</p>
                        <p>東京メトロ日比谷線 恵比寿駅 徒歩約4分</p>
                      </dd>
                    </div>
                    <GoogleMap />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full">
                <CardHeader className="border-b">
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <ClockIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                    営業時間
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <dl className="space-y-6">
                    <div>
                      <dt className="font-semibold text-base sm:text-lg mb-2">営業時間</dt>
                      <dd className="text-muted-foreground text-sm sm:text-base">10:00 - 18:00</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-base sm:text-lg mb-2">定休日</dt>
                      <dd className="text-muted-foreground text-sm sm:text-base">土日祝日</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
} 