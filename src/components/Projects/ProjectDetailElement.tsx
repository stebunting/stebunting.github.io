// Requirements
import React, { ReactElement } from "react";

// Types
import { Project } from "../../types/Project";

// Style
import css from "./Project.module.less";

interface Props {
  data: Project;
  dropdownClasses: string;
}

function ProjectDetailElement(props: Props): ReactElement {
  const { data, dropdownClasses } = props;

  return (
    <div className={dropdownClasses}>
      <h3 className={css.title}>{data.name}</h3>
      <div className={css.date}>{data.date}</div>

      <div className={css.thumbs}>
        {data.thumbImg.map((img) => (
          <a
            id={`${img}Link`}
            key={`${img}Link`}
            href={`images/projects/${img}`}
          >
            <img
              key={img}
              src={`images/projects/${img}`}
              alt={`${data.name}`}
            />
          </a>
        ))}
      </div>

      <div className={css.description}>{data.description}</div>

      <h3>Technologies</h3>
      <div className={css.technologies}>{data.technologies.join(", ")}</div>

      <h3>Links</h3>
      <div className={css.links}>
        {data.links
          .map((link) => (
            <a
              id={`${link.link}Link`}
              href={link.link}
              target="_blank"
              rel="noreferrer"
              key={`${data.name}${link.link}`}
            >
              {link.type}
            </a>
          ))
          .reduce(
            (a, b) => (a.length > 0 ? [...a, "//", b] : [b]),
            [] as Array<ReactElement | string>,
          )}
      </div>
    </div>
  );
}

export default ProjectDetailElement;
