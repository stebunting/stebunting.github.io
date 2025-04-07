// Requirements
import React, { ReactElement } from "react";

// Style
import css from "./Technology.module.less";

interface Props {
  item: {
    name: string;
    imgUrl: string;
  };
}

function TechnologyItem(props: Props): ReactElement {
  const { item } = props;

  const image =
    item.imgUrl != null ? (
      <img
        src={`images/technologies/${item.imgUrl}`}
        alt={`${item.name} Logo`}
        height={40}
      />
    ) : (
      ""
    );

  return (
    <div className={css.item}>
      {image}
      {item.name}
    </div>
  );
}

export default TechnologyItem;
