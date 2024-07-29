import s from "./Work.module.scss";
import Project from "../Project";
import broadoaks from "../../../public/broadoaks.png";
import roady from "../../../public/roady.png";
import portfolio from "../../../public/portfolio.png";

function Work() {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <h5>Other work</h5>
        <p>Both commercial and personal projects I'm proud to show you.</p>
        <div className={s.projects}>
          <Project
            image={broadoaks}
            name="Broadoaks Retreat"
            description="Corporate off-site retreat in Waikanae, New Zealand"
            tech={[{ key: "1", name: "Next.js", variant: "frontEnd" }]}
          />
          <Project
            image={roady}
            name="Roady"
            description="Helping travellers find local knowledge, wherever they are."
            tech={[{ key: "1", name: "Flutter", variant: "frontEnd" }]}
          />
          <Project
            image={portfolio}
            name="This very site"
            description="Handmade with Next.js"
            tech={[{ key: "1", name: "Next.js", variant: "frontEnd" }]}
          />
        </div>
      </div>
    </div>
  );
}

export default Work;
