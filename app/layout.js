import "./globals.css";

const siteUrl = "https://gion-245.vercel.app";
const title = "祗園245｜京都・祇園のジャパニーズイタリアン｜完全予約制";
const description =
  "祗園245は、京都・祇園の町家で季節の食材と京野菜、黒毛和牛を味わう完全予約制のジャパニーズイタリアン。三条京阪駅から徒歩5分。コース、営業時間、予約、アクセスをご案内します。";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "祗園245",
    title,
    description:
      "季節の食材と京野菜を、和の繊細さとイタリア料理の感性で。京都・祇園の完全予約制レストラン。",
  },
  twitter: {
    card: "summary",
    title,
    description: "京都・祇園で味わう、季節のジャパニーズイタリアン。",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
