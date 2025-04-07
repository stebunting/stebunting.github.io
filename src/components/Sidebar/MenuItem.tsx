// Requirements
import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";

// Style
import css from "./Sidebar.module.less";

interface Props {
  external?: boolean;
  link: string;
  name: string;
  lastItem?: boolean;
}

// Function to render a single menu item
function MenuItem(props: Props): ReactElement {
  const { external, link, name, lastItem } = props;

  const tag = external ? (
    <a href={link} target="_blank" rel="noreferrer">
      {name}
    </a>
  ) : (
    <NavLink
      to={link}
      className={({ isActive }) => (isActive ? css.activePage : undefined)}
    >
      {name}
    </NavLink>
  );
  return (
    <li>
      &apos;
      {tag}
      &apos;
      {lastItem ? "" : ","}
    </li>
  );
}
MenuItem.defaultProps = {
  external: false,
  lastItem: false,
};

export default MenuItem;
