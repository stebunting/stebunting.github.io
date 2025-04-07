// Requirements
import React, { ReactElement } from "react";

// Style
import css from "./CV.module.less";

interface Props {
  name: string;
  link: string;
}

function Anchor(props: Props): ReactElement {
  const { name, link } = props;

  return (
    <a href={link} target="_blank" rel="noreferrer" className={css.cvAnchor}>
      {name}
    </a>
  );
}

export default Anchor;
