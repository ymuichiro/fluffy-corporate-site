import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { i18n, type Locale } from "../../i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

type Props = {
  children: React.ReactNode;
  params: { lang: Locale };
};

export const metadata: Metadata = {
  title: "loose and fluffy",
  description: "loose and fluffy corporate site",
  metadataBase: new URL("https://loose-and-fluffy.com/"),
  twitter: {
    card: "summary_large_image",
    title: "loose and fluffy",
    description: "loose and fluffy",
    creator: "@anpanmanringo",
    images: ["/twitter-image.png"],
  },
};

export default function RootLayout({ children, params }: Props) {
  return (
    <html lang={params.lang}>
      <body className={"min-h-screen bg-background font-sans antialiased " + inter.variable}>{children}</body>
    </html>
  );
}
