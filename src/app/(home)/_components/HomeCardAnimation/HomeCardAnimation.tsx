import Image from "next/image";
import { MajorCardsSlider } from "../../_components";
import s from "./HomeCardAnimation.module.css";

export default function HomeCardAnimation() {
  return (
    <div className={s.HomeCardAnimation}>
      <Image
        className={s.iphone}
        src="/svg/iphone.svg"
        width={320}
        height={466}
        alt="아이폰"
      />
      <MajorCardsSlider />
    </div>
  );
}
