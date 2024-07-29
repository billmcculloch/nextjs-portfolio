"use client";

import Image from "next/image";
import s from "./Hero.module.scss";

import profile from "../../../public/profile.jpg";
import LinkButton from "../LinkButton";

function Hero() {
  function scrollTo(id: string) {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <Image
          src={profile}
          alt="mobile profile picture"
          className={s.mobileProfile}
          width={90}
          height={90}
          priority
        />
        <div className={s.text}>
          <h3>Hello, I&apos;m</h3>
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
        <LinkButton
          label="See what I've been upto"
          onClick={() => scrollTo("work")}
        />
      </div>
    </div>
  );
}

export default Hero;
