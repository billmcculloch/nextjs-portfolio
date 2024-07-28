"use client";

import s from "./Work.module.scss";
import Image from "next/image";

import imageSrc from "../../../public/guider.webp";
import { useEffect, useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Work() {
  return (
    <div className={s.wrapper} id="work">
      <div className={s.container}>
        <div className={s.content}>
          <h5>Currently, I'm a Mid Front-end Engineer at Guider.</h5>
          <p>
            Based in London, I'm helping to build the future of peer-to-peer
            learning.
          </p>
          <p>
            Set on one hectare of lush gardens, we aim to provide the perfect
            space to connect, collaborate and, importantly, have fun. We cater
            for off-site meetings, day retreats and overnight stays for up to 11
            guests. We also have team events covered, with plenty of space for
            lawn games, tennis and relaxing by the pool.
          </p>
          <p>
            Located just outside of Waikanae, on the beautiful Kapiti Coast,
            Broadoaks Retreat is easily accessible from both Wellington and
            Palmerston North.
          </p>
        </div>
        <div className={s.animation}>
          <DotLottieReact
            src="https://lottie.host/9527ed10-7b50-4013-afec-28dd6ba7740a/NAlHEgdZb2.lottie"
            loop
            autoplay
            style={{
              height: 500,
              width: 500,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Work;
