import s from "./SectionTitle.module.css";

interface ISectionTitle {
  children: string;
}

const SectionTitle = ({ children }: ISectionTitle) => {
  return <h2 className={s.sectionTitle}>{children}</h2>;
};

export default SectionTitle;
