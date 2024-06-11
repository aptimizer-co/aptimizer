import { ReactNode } from "react";
import s from "./Container.module.css";

interface IContainer {
  style?: any;
  children?: ReactNode;
}

const Container = ({ style, children }: IContainer) => {
  return <div className={`${s.container} ${style}`}>{children}</div>;
};

export default Container;
