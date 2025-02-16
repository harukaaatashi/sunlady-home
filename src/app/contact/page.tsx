import { Metadata } from 'next';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'お問い合わせ | Sunlady',
  description: 'サンレディへのお問い合わせはこちらから。ご質問、ご相談、お見積もりなど、お気軽にお問い合わせください。',
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">お問い合わせ</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">お問い合わせ方法</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <EnvelopeIcon className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h3 className="text-base font-medium text-gray-900 dark:text-white">メール</h3>
                  <p className="text-gray-600 dark:text-gray-300">info@sunlady.co.jp</p>
                </div>
              </div>
              <div className="flex items-start">
                <PhoneIcon className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h3 className="text-base font-medium text-gray-900 dark:text-white">電話</h3>
                  <p className="text-gray-600 dark:text-gray-300">03-XXXX-XXXX</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">受付時間: 平日 9:00-18:00</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPinIcon className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h3 className="text-base font-medium text-gray-900 dark:text-white">所在地</h3>
                  <p className="text-gray-600 dark:text-gray-300">〒150-0021</p>
                  <p className="text-gray-600 dark:text-gray-300">東京都渋谷区恵比寿西1-32-11 ヴァイスハイム 3F</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">お問い合わせフォーム</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                送信する
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">よくあるご質問</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-base font-medium text-gray-900 dark:text-white mb-2">
              Q. 対応可能な地域を教えてください
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              A. 主に東京都、神奈川県、埼玉県、千葉県を中心とした首都圏でサービスを提供しております。その他の地域についてもご相談ください。
            </p>
          </div>
          <div>
            <h3 className="text-base font-medium text-gray-900 dark:text-white mb-2">
              Q. 見積もりは無料ですか？
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              A. はい、初回のご相談・お見積もりは無料で承っております。お気軽にお問い合わせください。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 