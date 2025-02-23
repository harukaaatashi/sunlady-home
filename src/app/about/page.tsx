'use client';

import { BuildingOffice2Icon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <Container className="py-12 sm:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-8 text-center">会社概要</h1>

        <div className="grid gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BuildingOffice2Icon className="h-6 w-6 text-primary" />
                企業情報
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="font-medium text-muted-foreground">会社名</div>
                <div className="sm:col-span-2">株式会社FDサンレディ</div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="font-medium text-muted-foreground">設立</div>
                <div className="sm:col-span-2">2020年4月1日</div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="font-medium text-muted-foreground">代表者</div>
                <div className="sm:col-span-2">代表取締役 田代 晴香</div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="font-medium text-muted-foreground">所在地</div>
                <div className="sm:col-span-2">
                  〒150-0021<br />
                  東京都渋谷区恵比寿西1-32-11<br />
                  ヴァイスハイム 3F
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPinIcon className="h-6 w-6 text-primary" />
                アクセス
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
                <Image
                  src="/map.jpg"
                  alt="オフィスの地図"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <p>JR恵比寿駅西口より徒歩5分</p>
                <p>東京メトロ日比谷線恵比寿駅より徒歩7分</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ClockIcon className="h-6 w-6 text-primary" />
                営業時間
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="font-medium text-muted-foreground">営業時間</div>
                <div className="sm:col-span-2">10:00 - 19:00</div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="font-medium text-muted-foreground">定休日</div>
                <div className="sm:col-span-2">土日祝日</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </Container>
  );
} 