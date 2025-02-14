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
                <th className="py-4 pr-4 text-left w-1/3">会社名</th>
                <td className="py-4">株式会社Sunlady</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 pr-4 text-left">設立</th>
                <td className="py-4">20XX年XX月</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 pr-4 text-left">代表取締役</th>
                <td className="py-4">XXX XXX</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 pr-4 text-left">所在地</th>
                <td className="py-4">
                  〒XXX-XXXX<br />
                  XX県XX市XX町X-X-X
                </td>
              </tr>
              <tr className="border-b">
                <th className="py-4 pr-4 text-left">事業内容</th>
                <td className="py-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li>XXXの開発・販売</li>
                    <li>XXXに関するコンサルティング</li>
                    <li>XXXの提供</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">アクセス</h2>
          <div className="aspect-w-16 aspect-h-9">
            {/* Google Mapsの埋め込みコードを追加 */}
            <iframe
              src="https://www.google.com/maps/embed?pb=XXXXXXXXXX" // 実際のGoogle Maps埋め込みURLに置き換えてください
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