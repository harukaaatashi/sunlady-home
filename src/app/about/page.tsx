export const metadata = {
  title: '会社概要 | Sunlady Home',
  description: 'Sunladyの会社概要ページです。1968年の創業以来、ファッション業界で革新的なソリューションを提供し続けています。',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">会社概要</h1>
      
      <div className="space-y-12">
        {/* ミッションセクション */}
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">企業理念</h2>
          <p className="text-blue-800 text-lg leading-relaxed mb-6">
            「ファッションを通じて、人々の生活に彩りと喜びを」
          </p>
          <p className="text-blue-700 leading-relaxed">
            Sunladyは、1968年の創業以来、ファッション業界における革新的なソリューションの提供を通じて、
            お客様のビジネスの成功と社会の発展に貢献してまいりました。
            私たちは、常に最新のトレンドと技術を取り入れながら、
            確かな品質とサービスを提供し続けることで、
            お客様との長期的な信頼関係を築いています。
          </p>
        </section>

        {/* 企業情報セクション */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">企業情報</h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-6 text-left w-1/3 bg-gray-50">社名</th>
                  <td className="py-4 px-6">株式会社　ファッション ディレクト サンレディ</td>
                </tr>
                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-6 text-left bg-gray-50">所在地</th>
                  <td className="py-4 px-6">
                    〒150-0021<br />
                    東京都渋谷区恵比寿西1-32-11 ヴァイスハイム 3F
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-6 text-left bg-gray-50">TEL</th>
                  <td className="py-4 px-6">03-3462-2751</td>
                </tr>
                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-6 text-left bg-gray-50">FAX</th>
                  <td className="py-4 px-6">03-3462-2750</td>
                </tr>
                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-6 text-left bg-gray-50">設立</th>
                  <td className="py-4 px-6">1968年</td>
                </tr>
                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-6 text-left bg-gray-50">代表者</th>
                  <td className="py-4 px-6">代表取締役　田代 修一</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-6 text-left bg-gray-50">事業内容</th>
                  <td className="py-4 px-6">
                    <ul className="list-disc list-inside space-y-2">
                      <li>ファッションショー及びイベント企画制作運営</li>
                      <li>アパレル企画及びODM業務</li>
                      <li>企業プロモーション・PR及びキャスティング業務</li>
                      <li>人材育成プログラム／ビジネスマナー研修／接客接遇講座／就職面接対策</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* アクセスセクション */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">アクセス</h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.2277668881747!2d139.70743797624553!3d35.64764813128067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b40c6f389bd%3A0x8058765a1a8e64d6!2z44CSMTUwLTAwMjEg5p2x5Lqs6YO95riL6LC35Yy65rOJ5q-U5a-_6KW_77yR5LiB55uu77yT77yS4oiS77yR77yRIOODtOOCoeOCpOOCueODj-OCpOODoA!5e0!3m2!1sja!2sjp!4v1708042849803!5m2!1sja!2sjp"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">交通アクセス</h3>
              <p className="text-gray-600 mb-4">JR山手線・埼京線「恵比寿駅」西口より徒歩8分</p>
              <p className="text-gray-600">東京メトロ日比谷線「恵比寿駅」1番出口より徒歩10分</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 