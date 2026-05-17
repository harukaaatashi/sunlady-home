/**
 * 会社情報の単一情報源（Single Source of Truth）
 *
 * メール / 住所 / アクセス情報を変更するときは
 * このファイルだけを書き換えること。
 * 他のコンポーネントから参照されているので自動で全箇所反映される。
 */

export const company = {
  name: '株式会社ファッション ディレクト サンレディ',
  email: 'sunlady2@bp.iij4u.or.jp',
  postalCode: '〒150-0021',
  addressLines: [
    '東京都渋谷区恵比寿西1-32-11',
    'ヴァイスハイム 3F',
  ],
  // Google Maps 検索用の連結アドレス
  addressFull: '東京都渋谷区恵比寿西1-32-11 ヴァイスハイム 3F',
  accessLines: [
    '東急東横線 代官山駅 徒歩約3分',
    'JR山手線 恵比寿駅 徒歩約4分',
    '東京メトロ日比谷線 恵比寿駅 徒歩約4分',
  ],
  businessHours: '10:00 – 18:00',
  closedDays: '土日祝日',
  founded: '1971年10月20日',
  representative: '代表取締役 田代修一',
} as const;
