import React from "react";
import s from "./TechBubble.module.scss";

interface TechBubbleProps {
  name: string;
  variant: "frontEnd" | "backEnd" | "other";
}

function TechBubble({ name, variant }: TechBubbleProps) {
  return (
    <div
      className={`${s.wrapper}  ${variant === "frontEnd" && s.frontEnd} ${
        variant === "backEnd" && s.backEnd
      }   ${variant === "other" && s.other} `}
    >
      <p>{name}</p>
    </div>
  );
}

export default TechBubble;
