import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header, Footer } from "@/src/components/index";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aptimizer.co.kr"),
  title: {
    default: "앱티마이저",
    template: "%s | 앱티마이저",
  },
  description: "AI기반 적성 진단 및 맞춤형 교육 서비스 기업",
  keywords: ["앱티마이저", "앱티핏", "적성", "학과", "대학", "AI", "진단"],
  authors: [{ name: "앱티마이저" }],
  icons: {
    icon: "/aptimizer_favicon_32x32_bg.ico",
  },
  verification: {
    google: "구글 서치 콘솔 인증 코드",
    other: {
      "naver-site-verification": "e83c08ec32445708604eef0865c3e0b3ab49c318",
    },
  },
  openGraph: {
    type: "website",
    siteName: "앱티마이저",
    title: "앱티마이저 - AI 솔루션 전문기업",
    description: "AI기반 적성 진단 및 맞춤형 교육 서비스 기업",
    url: "https://www.aptimizer.co.kr",
    locale: "ko_KR",
    images: [
      {
        url: "/png/aptifit-kakao.png",
        width: 1518,
        height: 712,
        alt: "앱티마이저 - AI 솔루션 전문기업",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "앱티마이저 - AI 솔루션 전문기업",
    description: "AI기반 적성 진단 및 맞춤형 교육 서비스 기업",
    images: ["/png/aptifit-kakao.png"],
  },
  alternates: {
    canonical: "https://www.aptimizer.co.kr",
  },
  robots: {
    index: true,
    follow: true,
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
