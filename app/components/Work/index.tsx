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
        <p>Both commercial and personal projects I&apos;m proud to show you.</p>
        <div className={s.projects}>
          <Project
            href="https://www.broadoaksretreat.co.nz/"
            image={broadoaks}
            name="Broadoaks Retreat"
            description="Website build for corporate off-site retreat including fetching up-to-date booking information from AirBnb. "
            tech={[
              {
                key: "bo-1",
                name: "Next.js",
                variant: "frontEnd",
              },
              {
                key: "bo-2",
                name: "Typescript",
                variant: "frontEnd",
              },
              {
                key: "bo-3",
                name: "Sass",
                variant: "frontEnd",
              },
              {
                key: "bo-4",
                name: "shadcn/ui",
                variant: "frontEnd",
              },
            ]}
          />
          <Project
            href="https://apps.apple.com/nz/app/roady/id1614907429"
            image={roady}
            name="Roady"
            description="Built a mobile and web app to help travellers find local knowledge, wherever they are."
            tech={[
              { key: "ro-1", name: "Flutter", variant: "frontEnd" },
              {
                key: "ro-2",
                name: "React",
                variant: "frontEnd",
              },
              {
                key: "ro-3",
                name: "Typescript",
                variant: "frontEnd",
              },
              {
                key: "ro-4",
                name: "Node.js",
                variant: "backEnd",
              },
              {
                key: "ro-5",
                name: "GraphQL",
                variant: "backEnd",
              },
            ]}
          />
          <Project
            hideDivider
            image={portfolio}
            name="This very site"
            description="Hand crafted with Next.js and Typescript."
            tech={[
              { key: "pf-1", name: "Next.js", variant: "frontEnd" },
              {
                key: "pf-2",
                name: "Typescript",
                variant: "frontEnd",
              },
              {
                key: "pf-3",
                name: "Sass",
                variant: "frontEnd",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Work;
