import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components";

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
      <body>
        <Header />
        {/* {children} */}
      </body>
    </html>
  );
}
