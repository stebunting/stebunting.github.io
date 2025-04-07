// Requirements
import React, { ReactElement } from "react";

// Style
import css from "./Sidebar.module.less";

interface Props {
  expanded: boolean;
}

// Component to render an arrow
// Points to right when menu closed, points down when menu open
function Arrow(props: Props): ReactElement {
  const { expanded } = props;

  const classes = expanded ? undefined : css.menuFolded;
  return (
    <svg className={classes} width="12" height="12" viewBox="0 0 306 306">
      <polygon
        className={css.arrow}
        points="270.3,58.65 153,175.95 35.7,58.65 0,94.35 153,247.35 306,94.35"
      />
    </svg>
  );
}

export default Arrow;
