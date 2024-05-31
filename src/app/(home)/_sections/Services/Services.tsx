import s from "./Services.module.css";

const Services = () => {
  return (
    <section className={s.services}>
      <div>
        <h2 className={s.title}>SERVICES</h2>
        <p className={s.desc}>앱티마이저가 제공하는 다양한 서비스를 만나보세요</p>
      </div>
      {/* 사이드 네비게이션 */}
      <div>
        <div>
          <p>개인을 위한 서비스</p>
          <ul>
            <li>앱티핏 검사</li>
            <li>진로챗봇 서비스</li>
            <li>진로PT 서비스 구독</li>
          </ul>
        </div>
        <div>
          <p>단체를 위한 서비스</p>
          <ul>
            <li>프리미엄 교육 서비스</li>
            <li>맞춤 서비스 상담</li>
            <li>앱티핏 검사 단체 구매</li>
          </ul>
        </div>
      </div>
      {/* 콘텐츠 */}
      <div>
        <p>앱티핏 검사</p>
        <p>
          앱티핏 검사는 서울대 및 주요 대학의 교수진 자문을 받은 학문 프로파일 데이터와 학생 프로파일 데이터를 학습한 AI
          추천 모델을 사용하여, 각 학과의 최신 학문적 트렌드와 세부적인 5대 특성을 바탕으로 최적의 학과를 추천합니다.
        </p>
      </div>
    </section>
  );
};

export default Services;
