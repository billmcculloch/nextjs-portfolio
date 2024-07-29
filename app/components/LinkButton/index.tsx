import React from "react";
import s from "./LinkButton.module.scss";
import Image from "next/image";
import arrow from "../../../public/arrow.svg";

interface LinkButtonProps {
  variant?: "light" | "dark";
  label: string;
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
}

function LinkButton({ label, onClick, variant = "light" }: LinkButtonProps) {
  return (
    <div className={s.btn} onClick={onClick} content="button">
      <p>{label}</p>
      <Image
        src={arrow}
        alt="arrow"
        className={variant === "light" ? s.arrow : s.arrowDark}
      />
    </div>
  );
}

export default LinkButton;
