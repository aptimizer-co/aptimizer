import s from "./ScheduleSection.module.css";

const ScheduleSection = () => {
  return (
    <section className={s.ScheduleSection}>
      <p className={s.title}>프로그램 일정</p>
      <div className={s.scheduleContainer}>
        <div className={s.day}>
          <p className={s.dayTitle}>
            <span className={s.num}>1</span> 앱티핏 학과적성진단
          </p>
          <p className={s.dayDesc}>
            AI기반 학과적성진단을 통한 참여 학생의 정확한 적성 진단
          </p>
        </div>
        <div className={s.days}>
          <div className={s.day}>
            <p className={s.dayTitle}>
              <span className={s.num}>2</span> 에듀프리미엄 현장 멘토링
            </p>
            <p>에듀 프리미엄 진로 캠프 (1박 2일)</p>
          </div>
          <div className={s.day}>
            <p className={s.dayTitle}>
              <span className={s.num}>3</span> DT체험교육 프로그램
            </p>
            <p className={s.dayDesc}>
              디지털 대전환시대에 걸맞은 DT체험교육 (8시간)
            </p>
          </div>
          <div className={s.day}>
            <p className={s.dayTitle}>
              <span className={s.num}>4</span> 온라인 멘토링
            </p>
            <p className={s.dayDesc}>
              참여자의 단기적인 자극이 아닌, 장기적이고 지속적인 변화를 위한
              지속적인 온라인 멘토링 (주 1회 3시간, 총 4회)
            </p>
          </div>
        </div>
        <div className={s.day}>
          <p className={s.dayTitle}>
            <span className={s.num}>5</span> 앱티핏 학과적성진단
          </p>
          <p className={s.dayDesc}>
            AI기반 학과적성진단을 통한 참여 학생의 정확한 적성 진단
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
