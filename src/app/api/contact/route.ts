import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // 必須フィールドの検証
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: '必須項目が入力されていません。' },
        { status: 400 }
      );
    }

    // メール送信の設定
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 管理者宛メール
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: `[お問い合わせ] ${subject}`,
      text: `
お名前: ${name}
メールアドレス: ${email}
件名: ${subject}

お問い合わせ内容:
${message}
      `,
    });

    // 自動返信メール
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: '【自動返信】お問い合わせを受け付けました',
      text: `
${name} 様

お問い合わせありがとうございます。
以下の内容で承りました。

件名: ${subject}

お問い合わせ内容:
${message}

内容を確認の上、担当者より折り返しご連絡させていただきます。
しばらくお待ちくださいますようお願い申し上げます。

※このメールは自動送信されています。
このメールに返信いただいても回答できない場合がございます。

--
株式会社サンレディ
〒150-0021
東京都渋谷区恵比寿西1-32-11 ヴァイスハイム 3F
      `,
    });

    return NextResponse.json({ message: 'お問い合わせを受け付けました。' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'お問い合わせの送信に失敗しました。' },
      { status: 500 }
    );
  }
} 