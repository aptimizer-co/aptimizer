import { Service } from "../../_containers";
import s from "./ServiceSection.module.css";

const ServiceSection = () => {
  return (
    <section className={s.ServiceSection}>
      <p className={s.title}>세부 프로그램</p>
      <Service type="1" />
      <Service type="2" />
      <Service type="3" />
      <Service type="4" />
    </section>
  );
};

export default ServiceSection;
