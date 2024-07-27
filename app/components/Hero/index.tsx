import Image from "next/image";
import s from "./Hero.module.scss";

import arrow from "../../../public/arrow.svg";

function Hero() {
  return (
    <div className={s.wrapper}>
      <div className={s.text}>
        <h3>Hello, I'm</h3>
        <h1>Bill McCulloch</h1>
        <h5>I like to build things and occasionally access the mainframe.</h5>
      </div>
      <div className={s.cta}>
        <p> See what I've been upto</p>
        <Image src={arrow} alt="arrow" className={s.arrow} />
      </div>
    </div>
  );
}

export default Hero;
