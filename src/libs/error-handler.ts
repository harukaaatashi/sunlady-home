export class APIError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500,
    public code: string = 'INTERNAL_SERVER_ERROR'
  ) {
    super(message);
    this.name = 'APIError';
  }
}

export const handleAPIError = (error: unknown) => {
  console.error('API Error:', error);

  if (error instanceof APIError) {
    return new Response(
      JSON.stringify({
        error: {
          message: process.env.NODE_ENV === 'production' 
            ? '予期せぬエラーが発生しました' 
            : error.message,
          code: error.code,
        },
      }),
      {
        status: error.statusCode,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  // 未知のエラーの場合
  return new Response(
    JSON.stringify({
      error: {
        message: '予期せぬエラーが発生しました',
        code: 'INTERNAL_SERVER_ERROR',
      },
    }),
    {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}; 