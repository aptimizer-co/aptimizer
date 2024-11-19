import { Suspense } from "react";
import { Carousel, Navigation, Title } from "./_components";
import s from "./Newslayout.module.css";

export default async function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={s.newsContainer}>
      <Title />
      {/* <Suspense fallback={<CarouselSkeleton />}> */}
      <Carousel />
      {/* </Suspense> */}
      <Navigation />

      {/* 카테고리별 컨텐츠만 변경 */}
      {/* <Suspense fallback={<ContentSkeleton />}>{children}</Suspense> */}
      {children}
    </main>
  );
}
