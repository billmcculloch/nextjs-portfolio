"use client";

import React from "react";
import s from "./Footer.module.scss";
import LinkButton from "../LinkButton";

function Footer() {
  return (
    <div className={s.wrapper}>
      <h5>Get in touch</h5>
      <div className={s.container}>
        <LinkButton href={"mailto:billrmcculloch@gmail.com"} label="Email" />
        <LinkButton
          href={"https://www.linkedin.com/in/bill-mcculloch/"}
          label="LinkedIn"
        />
        <LinkButton href={"https://github.com/billmcculloch"} label="GitHub" />
      </div>
    </div>
  );
}

export default Footer;
