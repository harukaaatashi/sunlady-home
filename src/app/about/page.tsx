export const metadata = {
  title: '会社概要 | Sunlady Home',
  description: 'Sunladyの会社概要ページです。',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">会社概要</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">企業情報</h2>
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b">
                <th className="py-4 pr-4 text-left w-1/3">社名</th>
                <td className="py-4">株式会社　ファッション ディレクト サンレディ</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 pr-4 text-left">所在地</th>
                <td className="py-4">
                  〒150-0021<br />
                  東京都渋谷区恵比寿西1-32-11 ヴァイスハイム 3F
                </td>
              </tr>
              <tr className="border-b">
                <th className="py-4 pr-4 text-left">TEL</th>
                <td className="py-4">03-3462-2751</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 pr-4 text-left">FAX</th>
                <td className="py-4">03-3462-2750</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 pr-4 text-left">設立</th>
                <td className="py-4">1968年</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 pr-4 text-left">代表者</th>
                <td className="py-4">代表取締役　田代 修一</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 pr-4 text-left">事業内容</th>
                <td className="py-4">
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
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">アクセス</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.2277668881747!2d139.70743797624553!3d35.64764813128067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b40c6f389bd%3A0x8058765a1a8e64d6!2z44CSMTUwLTAwMjEg5p2x5Lqs6YO95riL6LC35Yy65rOJ5q-U5a-_6KW_77yR5LiB55uu77yT77yS4oiS77yR77yRIOODtOOCoeOCpOOCueODj-OCpOODoA!5e0!3m2!1sja!2sjp!4v1708042849803!5m2!1sja!2sjp"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
} 