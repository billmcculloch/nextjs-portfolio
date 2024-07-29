import Image from "next/image";
import TechBubble from "../TechBubble";
import s from "./Current.module.scss";
import logoSrc from "../../../public/guider-logo.png";
import imageSrc from "../../../public/spain.jpg";

function Current() {
  return (
    <div className={s.wrapper} id="work">
      <div className={s.container}>
        <div className={s.content}>
          <Image src={logoSrc} alt="Guider Logo" width={200} />
          <h5>I&apos;m currently a Mid Front-end Engineer at Guider.</h5>
          <p>
            Based in London, I&apos;m helping to build the future of
            peer-to-peer learning. Guider is an enterprise mentoring platform
            used by organizations around the world including LVMH, Deloitte and
            Specsavers.
          </p>
          <p>
            Primarily focussed on front-end development, leading a rebuild of
            the app and its component library to a new style guide and coding
            standard.
          </p>
          <div className={s.tech}>
            <TechBubble name="React" variant="frontEnd" />
            <TechBubble name="Typescript" variant="frontEnd" />
            <TechBubble name="Redux" variant="frontEnd" />
            <TechBubble name="Storybook" variant="frontEnd" />
            <TechBubble name="REST API" variant="backEnd" />
            <TechBubble name="Node.js" variant="backEnd" />
            <TechBubble name="MongoDB" variant="backEnd" />
            <TechBubble name="Cypress" variant="other" />
            <TechBubble name="Sanity" variant="other" />
            <TechBubble name="Figma" variant="other" />
            <TechBubble name="GitHub" variant="other" />
          </div>
        </div>
        <Image
          src={imageSrc}
          alt="Me in Spain"
          width={320}
          style={{ borderRadius: "10px", margin: "30px 20px" }}
        />
      </div>
    </div>
  );
}

export default Current;
