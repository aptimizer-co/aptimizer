import s from "./SectionSubtitle.module.css";

interface ISectionSubtitle {
  children: string;
}

const SectionSubtitle = ({ children }: ISectionSubtitle) => {
  return <p className={s.sectionSubtitle}>{children}</p>;
};

export default SectionSubtitle;
