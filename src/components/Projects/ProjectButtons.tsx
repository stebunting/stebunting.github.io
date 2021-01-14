// Requirements
import React from 'react';

// Style
import css from './Project.module.less';

interface Props {
  data: Array<string>,
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

function ProjectButtons(props: Props): React.ReactElement {
  const { data, handleClick } = props;

  return (
    <div className={css.buttons}>
      {data.map((project) => (
        <button
          key={`${project}Button`}
          id={`${project}Button`}
          type="button"
          className={css.button}
          onClick={handleClick}
        >
          {project}
        </button>
      ))}
    </div>
  );
}

export default ProjectButtons;
