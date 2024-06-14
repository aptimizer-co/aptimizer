import Image from "next/image";
import Aptifit from "@/public/png/aptifit.png";
import s from "./ServiceContent.module.css";

interface IServiceContent {
  id: number;
}

const ServiceContent = ({ id }: IServiceContent) => {
  switch (id) {
    case 0:
      return (
        <div className={s.product}>
          <div className={s.productImgContainer}>
            <Image src={Aptifit} alt="앱티핏 검사" fill />
          </div>
          <p className={s.productTitle}>앱티핏 검사</p>
          <p className={s.productDesc}>
            앱티핏 검사는 서울대 및 주요 대학의 교수진 자문을 받은 학문 프로파일
            데이터와 학생 프로파일 데이터를 학습한 AI 추천 모델을 사용하여, 각
            학과의 최신 학문적 트렌드와 세부적인 5대 특성을 바탕으로 최적의
            학과를 추천합니다.
          </p>
          <button className={s.button}>검사하기</button>
        </div>
      );
    case 1:
      return (
        <div className={s.product}>
          <div className={s.productImgContainer}>
            <Image src={Aptifit} alt="앱티핏 검사" fill />
          </div>
          <p className={s.productTitle}>진로 챗봇 서비스</p>
          <p className={s.productDesc}>
            앱티핏 검사는 서울대 및 주요 대학의 교수진 자문을 받은 학문 프로파일
            데이터와 학생 프로파일 데이터를 학습한 AI 추천 모델을 사용하여, 각
            학과의 최신 학문적 트렌드와 세부적인 5대 특성을 바탕으로 최적의
            학과를 추천합니다.
          </p>
          <button className={s.button}>검사하기</button>
        </div>
      );
    case 2:
      return (
        <div className={s.product}>
          <div className={s.productImgContainer}>
            <Image src={Aptifit} alt="앱티핏 검사" fill />
          </div>
          <p className={s.productTitle}>진로 PT 서비스 구독</p>
          <p className={s.productDesc}>
            앱티핏 검사는 서울대 및 주요 대학의 교수진 자문을 받은 학문 프로파일
            데이터와 학생 프로파일 데이터를 학습한 AI 추천 모델을 사용하여, 각
            학과의 최신 학문적 트렌드와 세부적인 5대 특성을 바탕으로 최적의
            학과를 추천합니다.
          </p>
          <button className={s.button}>검사하기</button>
        </div>
      );
    case 3:
      return (
        <div className={s.product}>
          <div className={s.productImgContainer}>
            <Image src={Aptifit} alt="앱티핏 검사" fill />
          </div>
          <p className={s.productTitle}>프리미엄 교육 서비스</p>
          <p className={s.productDesc}>
            앱티핏 검사는 서울대 및 주요 대학의 교수진 자문을 받은 학문 프로파일
            데이터와 학생 프로파일 데이터를 학습한 AI 추천 모델을 사용하여, 각
            학과의 최신 학문적 트렌드와 세부적인 5대 특성을 바탕으로 최적의
            학과를 추천합니다.
          </p>
          <button className={s.button}>검사하기</button>
        </div>
      );
    case 4:
      return (
        <div className={s.product}>
          <div className={s.productImgContainer}>
            <Image src={Aptifit} alt="앱티핏 검사" fill />
          </div>
          <p className={s.productTitle}>앱티핏 검사 단체 구매</p>
          <p className={s.productDesc}>
            앱티핏 검사는 서울대 및 주요 대학의 교수진 자문을 받은 학문 프로파일
            데이터와 학생 프로파일 데이터를 학습한 AI 추천 모델을 사용하여, 각
            학과의 최신 학문적 트렌드와 세부적인 5대 특성을 바탕으로 최적의
            학과를 추천합니다.
          </p>
          <button className={s.button}>검사하기</button>
        </div>
      );
  }
};

export default ServiceContent;
