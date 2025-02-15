'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // 本番環境でのエラーログ
    if (process.env.NODE_ENV === 'production') {
      // エラーの詳細情報をログサービスに送信
      console.error('Error occurred:', {
        message: error.message,
        digest: error.digest,
        timestamp: new Date().toISOString(),
      });
    }
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          エラーが発生しました
        </h2>
        {process.env.NODE_ENV === 'development' ? (
          <p className="text-gray-600 mb-4">{error.message}</p>
        ) : (
          <p className="text-gray-600 mb-4">
            申し訳ありませんが、エラーが発生しました。しばらく時間をおいて再度お試しください。
          </p>
        )}
        <button
          onClick={reset}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          もう一度試す
        </button>
      </div>
    </div>
  );
} 