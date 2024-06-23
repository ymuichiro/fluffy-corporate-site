import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "谷中Omusubi | おむすび",
  description: "東京都文京区よみせ通りにあるおむすび屋さん「谷中Omusubi」の公式サイトです。",
  metadataBase: new URL("https://looseandfluffy.com/"),
  keywords: ["おむすび", "谷中", "文京区", "東京都"],
  twitter: {
    card: "summary_large_image",
    title: "谷中Omusubi | おむすび",
    description: "東京都文京区よみせ通りにあるおむすび屋さん「谷中Omusubi」の公式サイトです。",
    creator: "@anpanmanringo",
    images: ["/twitter-image.png"],
  },
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <body className={"min-h-screen bg-background font-sans antialiased " + inter.variable}>{children}</body>
    </html>
  );
}
