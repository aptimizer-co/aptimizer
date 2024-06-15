"use client";

import { Dispatch, SetStateAction } from "react";
import s from "./ServiceButton.module.css";

interface IServiceButton {
  id: number;
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
  children: string;
}

const ServiceButton = ({ id, active, setActive, children }: IServiceButton) => {
  const selectService = (id: number) => {
    setActive(id);
  };

  return (
    <button
      id={id}
      className={`${s.serviceButton} ${
        active === id ? s.serviceButtonActive : ""
      }`}
      onClick={() => selectService(id)}
    >
      {children}
    </button>
  );
};

export default ServiceButton;
