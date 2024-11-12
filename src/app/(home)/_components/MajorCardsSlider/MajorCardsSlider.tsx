import s from "./MajorCardsSlider.module.css";
import Image from "next/image";

export default function MajorCardsSlider() {
  return (
    <div className={s.MajorCardsSlider}>
      <Image
        className={`${s.majorCard} ${s.majorCard1}`}
        src="/cards/0.건축학.svg"
        alt="건축학 카드"
        width={180}
        height={250}
      />
      <Image
        className={`${s.majorCard} ${s.majorCard2}`}
        src="/cards/1.토목공학.svg"
        alt="토목공학 카드"
        width={180}
        height={250}
      />
      <Image
        className={`${s.majorCard} ${s.majorCard3}`}
        src="/cards/2.도시공학.svg"
        alt="도시공학 카드"
        width={180}
        height={250}
      />
      <Image
        className={`${s.majorCard} ${s.majorCard4}`}
        src="/cards/3.소방방재학.svg"
        alt="소방방재학 카드"
        width={180}
        height={250}
      />
      <Image
        className={`${s.majorCard} ${s.majorCard5}`}
        src="/cards/4.전산학컴퓨터공학.svg"
        alt="전산학컴퓨터공학 카드"
        width={180}
        height={250}
      />
      <Image
        className={`${s.majorCard} ${s.majorCard6}`}
        src="/cards/5.산업공학.svg"
        alt="산업공학 카드"
        width={180}
        height={250}
      />
      <Image
        className={`${s.majorCard} ${s.majorCard7}`}
        src="/cards/6.게임공학.svg"
        alt="게임공학 카드"
        width={180}
        height={250}
      />
      <Image
        className={`${s.majorCard} ${s.majorCard8}`}
        src="/cards/7.재료공학.svg"
        alt="재료공학 카드"
        width={180}
        height={250}
      />
      <Image
        className={`${s.majorCard} ${s.majorCard9}`}
        src="/cards/8.화학.svg"
        alt="화학 카드"
        width={180}
        height={250}
      />
      <Image
        className={`${s.majorCard} ${s.majorCard10}`}
        src="/cards/9.화학공학.svg"
        alt="화학공학 카드"
        width={180}
        height={250}
      />
    </div>
  );
}
