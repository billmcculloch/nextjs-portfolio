"use client";

import React from "react";
import s from "./Footer.module.scss";
import LinkButton from "../LinkButton";

function Footer() {
  return (
    <div className={s.wrapper}>
      <h5>Get in touch</h5>
      <div className={s.container}>
        <LinkButton onClick={() => {}} label="Email" />
        <LinkButton onClick={() => {}} label="LinkedIn" />
        <LinkButton onClick={() => {}} label="GitHub" />
      </div>
    </div>
  );
}

export default Footer;
