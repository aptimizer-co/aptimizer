"use client";

import { Dispatch, SetStateAction } from "react";
import s from "./ServiceButton.module.css";

interface IServiceButton {
  id: number;
  activeService: number;
  setActiveService: Dispatch<SetStateAction<number>>;
  children: string;
}

const ServiceButton = ({
  id,
  activeService,
  setActiveService,
  children,
}: IServiceButton) => {
  const selectService = (id: number) => {
    setActiveService(id);
  };

  return (
    <button
      data-id={id}
      className={`${s.serviceButton} ${
        activeService === id ? s.serviceButtonActive : ""
      }`}
      onClick={() => selectService(id)}
    >
      {children}
    </button>
  );
};

export default ServiceButton;
