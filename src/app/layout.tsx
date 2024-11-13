import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header, Footer } from "@/src/components/index";

export const metadata: Metadata = {
  title: "앱티마이저",
  description: "꿈을 이루는 걸 도와주는 기업",
  icons: {
    icon: "/favicon.svg",
  },
  verification: {
    other: {
      "naver-site-verification": "e83c08ec32445708604eef0865c3e0b3ab49c318",
    },
  },
};

const pretendard = localFont({
  src: "../static/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR">
      <body className={pretendard.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
