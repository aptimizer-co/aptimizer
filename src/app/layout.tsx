import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "앱티마이저",
  description: "꿈을 이루는 걸 도와주는 기업",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR">
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
