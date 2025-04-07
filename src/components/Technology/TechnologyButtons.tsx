// Requirements
import React, { ReactElement } from "react";

// Style
import css from "./Technology.module.less";

interface Props {
  data: Array<string>;
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function TechnologyButtons(props: Props): ReactElement {
  const { data, handleClick } = props;

  return (
    <div className={css.buttons}>
      {data.map((technology) => (
        <button
          key={`${technology}Button`}
          id={`${technology}Button`}
          type="button"
          className={css.button}
          onClick={handleClick}
        >
          {technology}
        </button>
      ))}
    </div>
  );
}

export default TechnologyButtons;
