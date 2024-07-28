"use client";

import Image from "next/image";
import s from "./Hero.module.scss";

import arrow from "../../../public/arrow.svg";
import profile from "../../../public/profile.jpg";

function Hero() {
  function scrollTo(id: string) {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className={s.wrapper}>
      <Image
        src={profile}
        alt="mobile profile picture"
        className={s.mobileProfile}
        width={90}
        height={90}
        priority
      />
      <div className={s.text}>
        <h3>Hello, I'm</h3>
        <div className={s.hero}>
          <Image
            src={profile}
            alt="profile pictre"
            className={s.profile}
            width={120}
            height={120}
            priority
          />
          <h1>Bill McCulloch</h1>
        </div>
        <h5>I like to build things and occasionally access the mainframe.</h5>
      </div>
      <div className={s.cta} onClick={() => scrollTo("work")}>
        <p> See what I've been upto</p>
        <Image src={arrow} alt="arrow" className={s.arrow} />
      </div>
    </div>
  );
}

export default Hero;
