import { Dispatch, SetStateAction } from "react";
import s from "./ServiceButton.module.css";

interface IServiceButton {
  id: number;
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
  children: string;
}

const ServiceButton = ({ id, active, setActive, children }: IServiceButton) => {
  const handleService = (id: number) => {
    setActive(id);
  };

  return (
    <li className={`${s.serviceButton} ${active === id ? s.active : ""}`}>
      <button id={id} className={s.button} onClick={() => handleService(id)}>
        {children}
      </button>
    </li>
  );
};

export default ServiceButton;
