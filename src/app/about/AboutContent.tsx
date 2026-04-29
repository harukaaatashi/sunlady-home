'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import dynamic from 'next/dynamic';

const GoogleMap = dynamic(() => import('./GoogleMap'), {
  loading: () => <div className="aspect-[16/9] w-full bg-muted animate-pulse" />,
  ssr: false
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
};

const labelClass = 'text-xs tracking-widest uppercase text-muted-foreground mb-1';
const valueClass = 'text-sm text-foreground/80';

export default function AboutContent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-5xl mx-auto"
    >
      <div className="grid gap-6 sm:gap-8">
        <motion.div variants={itemVariants}>
          <Card className="overflow-hidden">
            <CardHeader className="border-b py-4">
              <CardTitle>会社情報</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <dt className={labelClass}>会社名</dt>
                  <dd className={valueClass}>株式会社ファッション ディレクト サンレディ</dd>
                </div>
                <div>
                  <dt className={labelClass}>設立</dt>
                  <dd className={valueClass}>1971年10月20日</dd>
                </div>
                <div>
                  <dt className={labelClass}>代表者</dt>
                  <dd className={valueClass}>代表取締役 田代修一</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className={labelClass}>事業内容</dt>
                  <dd>
                    <ul className="grid gap-1.5 text-sm text-foreground/80 sm:grid-cols-2 mt-1">
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
        </motion.div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <CardHeader className="border-b py-4">
                <CardTitle>アクセス</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <dt className={labelClass}>住所</dt>
                    <dd className={`${valueClass} leading-relaxed`}>
                      〒150-0021<br />
                      東京都渋谷区恵比寿西1-32-11<br />
                      ヴァイスハイム 3F
                    </dd>
                  </div>
                  <div>
                    <dt className={labelClass}>最寄り駅</dt>
                    <dd className={`${valueClass} space-y-1`}>
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
              <CardHeader className="border-b py-4">
                <CardTitle>営業時間</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <dl className="space-y-6">
                  <div>
                    <dt className={labelClass}>営業時間</dt>
                    <dd className={valueClass}>10:00 – 18:00</dd>
                  </div>
                  <div>
                    <dt className={labelClass}>定休日</dt>
                    <dd className={valueClass}>土日祝日</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
