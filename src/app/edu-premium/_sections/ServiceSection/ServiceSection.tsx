import { Service } from "../../_containers";
import s from "./ServiceSection.module.css";

const ServiceSection = () => {
  return (
    <section className={s.ServiceSection}>
      <p className={s.title}>세부 프로그램</p>
      <div className={s.container}>
        <Service type="1" />
        <Service type="2" />
        <Service type="3" />
        <Service type="4" />
      </div>
    </section>
  );
};

export default ServiceSection;
