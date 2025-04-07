// Requirements
import React, { ReactElement } from "react";

// Components
import TechnologyItem from "./TechnologyItem";

// Style
import css from "./Technology.module.less";
import { Technology } from "../../types/Technology";

interface Props {
  data: Technology;
  dropdownClasses: string;
}

function TechnologyDetailElement(props: Props): ReactElement {
  const { data, dropdownClasses } = props;

  return (
    <div className={dropdownClasses}>
      <h3 className={css.title}>{data.name}</h3>
      <div className={css.description}>{data.description}</div>
      <div className={css.items}>
        {data.members.map((x) => (
          <TechnologyItem key={x.name} item={x} />
        ))}
      </div>
    </div>
  );
}

export default TechnologyDetailElement;
