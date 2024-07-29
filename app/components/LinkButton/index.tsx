import React from "react";
import s from "./LinkButton.module.scss";
import Image from "next/image";
import arrow from "../../../public/arrow.svg";
import Link from "next/link";

interface LinkButtonProps {
  variant?: "light" | "dark";
  label: string;
  href: string;
}

function LinkButton({ label, href, variant = "light" }: LinkButtonProps) {
  return (
    <Link className={s.btn} href={href} target="_blank">
      <p>{label}</p>
      <Image
        src={arrow}
        alt="arrow"
        className={variant === "light" ? s.arrow : s.arrowDark}
      />
    </Link>
  );
}

export default LinkButton;
