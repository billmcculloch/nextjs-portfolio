import React from "react";
import s from "./Project.module.scss";
import TechBubble from "../TechBubble";
import Image, { StaticImageData } from "next/image";

interface ProjectProps {
  name: string;
  description: string;
  image: StaticImageData;
  hideDivider?: boolean;
  tech: {
    key: string;
    name: string;
    variant: "frontEnd" | "backEnd" | "other";
  }[];
}

function Project({
  name,
  description,
  tech,
  image,
  hideDivider = false,
}: ProjectProps) {
  return (
    <div className={s.wrapper}>
      <Image src={image} alt="image" className={s.imageSrc} />
      <div className={s.tech}>
        {tech?.map((t) => {
          return <TechBubble key={t.key} name={t.name} variant={t.variant} />;
        })}
      </div>

      <div className={s.text}>
        <h6>{name}</h6>
        <p>{description}</p>
        {!hideDivider && <div className={s.divider} />}
      </div>
    </div>
  );
}

export default Project;
