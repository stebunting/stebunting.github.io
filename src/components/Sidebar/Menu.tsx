// Requirements
import React, { ReactElement } from 'react';

// Components
import Arrow from './Arrow';

// Style
import css from './Sidebar.module.less';

interface Props {
  name: string,
  children: React.ReactNode,
  expanded: boolean,
  handleClick: (id: string) => void
}

// Function to render a sidebar menu wrapper
function Menu(props: Props): ReactElement {
  const {
    name,
    children,
    expanded,
    handleClick
  } = props;

  const classes = expanded ? css.navList : [css.navList, css.navListFolded].join(' ');

  return (
    <ul className={css.menuSection}>
      <li>
        <span
          className={css.menuDropdown}
          role="button"
          tabIndex={0}
          onClick={() => handleClick(name)}
          onKeyDown={(event) => {
            if (event.key === ' ') handleClick(name);
          }}
        >
          <Arrow expanded={expanded} />
          <span className={css.keyword}>const</span>
          &nbsp;
          <span className={css.variable}>{name}</span>
        </span>
        &nbsp;
        <span className={css.variable}>= [</span>
        <ul className={classes}>
          {children}
        </ul>
        ];
      </li>
    </ul>
  );
}

export default Menu;
