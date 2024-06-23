import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "loose and fluffy",
  description: "loose and fluffy corporate site",
  metadataBase: new URL("https://looseandfluffy.com/"),
  twitter: {
    card: "summary_large_image",
    title: "loose and fluffy",
    description: "loose and fluffy",
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
