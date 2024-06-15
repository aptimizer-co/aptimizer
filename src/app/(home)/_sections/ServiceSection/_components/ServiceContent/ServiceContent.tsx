import Image from 'next/image';
import Aptifit from '@/public/png/aptifit.png';
import s from './ServiceContent.module.css';

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
            서울대 및 주요 대학의 교수진 자문을 받은 학과 프로파일 데이터와
            재학생 프로파일 데이터를 학습한 AI 추천 모델을 활용하여, 135개
            학과의 최신 트렌드와 학과 적성의 5대 요소를 기반으로 최적의 학과를
            추천합니다. 적성 검사를 통해 자신에게 가장 잘 어울리는 진로 설계를
            확인해보세요.
          </p>
          <button className={s.button}>검사하기</button>
        </div>
      );
    case 1:
      return (
        <div className={s.product}>
          <div className={s.productImgContainer}>
            <Image src={Aptifit} alt="진로 챗봇 서비스" fill />
          </div>
          <p className={s.productTitle}>진로 챗봇 서비스</p>
          <p className={s.productDesc}>
            미래 설계의 든든한 동반자인 진로 챗봇 서비스를 통해 앱티마이저의
            모든 데이터를 학습한 진로 챗봇과 함께 맞춤형 진로 상담을
            체험해보세요. 다양한 학과와 직업에 대한 최신 정보와 자료를 바탕으로
            개인화된 진로 상담을 제공하며, 24시간 실시간으로 언제 어디서나 즉시
            챗봇의 도움을 받을 수 있습니다.
          </p>
          <button className={s.button}>검사하기</button>
        </div>
      );
    case 2:
      return (
        <div className={s.product}>
          <div className={s.productImgContainer}>
            <Image src={Aptifit} alt="진로 PT 서비스 구독" fill />
          </div>
          <p className={s.productTitle}>진로 PT 서비스 구독</p>
          <p className={s.productDesc}>
            성공적인 진로 설계를 위한 통합 솔루션인 진로 PT 서비스를 통해
            앱티마이저가 제공하는 모든 서비스를 체계적이고 단계적으로 체험하며
            최적의 진로를 설계해보세요. 앱티핏 검사, 챗봇 상담, 멘토링 프로그램
            등 다양한 서비스를 경험할 수 있습니다.
          </p>
          <button className={s.button}>검사하기</button>
        </div>
      );
    case 3:
      return (
        <div className={s.product}>
          <div className={s.productImgContainer}>
            <Image src={Aptifit} alt="앱티핏 검사 단체 구매" fill />
          </div>
          <p className={s.productTitle}>앱티핏 검사 단체 구매</p>
          <p className={s.productDesc}>
            앱티마이저의 AI 기반 적성 검사를 단체에 적용해 보세요. 다양한
            학생들이 미래를 명확하고 효율적으로 설계할 수 있도록 앱티핏을
            활용하여 개별 학생의 강점과 진로 적성을 파악하고 맞춤형 지도를
            제공할 수 있습니다. 개별 학생뿐만 아니라 집단 전체에 대한 분석
            보고서도 받아볼 수 있습니다.
          </p>
          <button className={s.button}>검사하기</button>
        </div>
      );
    case 4:
      return (
        <div className={s.product}>
          <div className={s.productImgContainer}>
            <Image src={Aptifit} alt="프리미엄 교육 서비스" fill />
          </div>
          <p className={s.productTitle}>프리미엄 교육 서비스</p>
          <p className={s.productDesc}>
            앱티마이저가 제공하는 프리미엄 교육 서비스를 단체에 적용해보세요.
            단체의 특성에 맞게 PT 서비스를 맞춤형으로 운영해드리며, 온라인과
            오프라인 환경 모두에서 적용 가능합니다.
          </p>
          <button className={s.button}>검사하기</button>
        </div>
      );
  }
};

export default ServiceContent;
