"use client";

import Image from "next/image";
import LinkButton from "../LinkButton";
import TechBubble from "../TechBubble";
import s from "./Work.module.scss";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import logoSrc from "../../../public/guider-logo.png";

function Work() {
  return (
    <div className={s.wrapper} id="work">
      <div className={s.container}>
        <div className={s.content}>
          <Image src={logoSrc} alt="Guider Logo" width={300} />
          <h5>I'm a Mid Front-end Engineer at Guider.</h5>
          <p>
            Based in London, I'm helping to build the future of peer-to-peer
            learning. Guider is an enterprise mentoring platform used by
            organizations around the world including LVMH, Deloitte and
            Specsavers.
          </p>
          <div className={s.tech}>
            <TechBubble name="React" variant="frontEnd" />
            <TechBubble name="Typescript" variant="frontEnd" />
            <TechBubble name="Redux" variant="frontEnd" />
            <TechBubble name="REST API" variant="backEnd" />
            <TechBubble name="Node.js" variant="backEnd" />
            <TechBubble name="MongoDB" variant="backEnd" />
            <TechBubble name="Cypress" variant="other" />
            <TechBubble name="Storybook" variant="other" />
            <TechBubble name="Sanity" variant="other" />
          </div>
          <LinkButton
            label="See what else I've built"
            onClick={() => {}}
            variant="dark"
          />
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
