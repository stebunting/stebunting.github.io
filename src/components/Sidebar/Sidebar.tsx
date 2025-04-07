// Requirements
import React, { ReactElement, useLayoutEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// Components
import Menu from "./Menu";
import MenuItem from "./MenuItem";

// Function to render menu sidebar
function Sidebar(): ReactElement {
  const windowBreakpoint = 900;
  const [main, setMain] = useState({
    expanded: false,
    edited: false,
  });
  const [external, setExternal] = useState({
    expanded: false,
    edited: false,
  });

  useLayoutEffect(() => {
    function windowUpdated() {
      const largeViewport = window.innerWidth >= windowBreakpoint;

      setMain((prevMain) => ({
        ...prevMain,
        expanded: prevMain.edited ? prevMain.expanded : largeViewport,
      }));
      setExternal((prevExternal) => ({
        ...prevExternal,
        expanded: prevExternal.edited ? prevExternal.expanded : largeViewport,
      }));
    }
    window.addEventListener("resize", windowUpdated);
    windowUpdated();

    return () => window.removeEventListener("resize", windowUpdated);
  }, []);

  function handleClick(id: string) {
    if (id === "main") {
      setMain({ expanded: !main.expanded, edited: true });
    } else if (id === "external") {
      setExternal({ expanded: !external.expanded, edited: true });
    }
  }

  return (
    <div className="sidebar">
      <h1>
        <NavLink to="/">Steve Bunting</NavLink>
      </h1>
      <nav>
        <Menu name="main" expanded={main.expanded} handleClick={handleClick}>
          <MenuItem link="/about" name="about" />
          <MenuItem link="/projects" name="projects" />
          <MenuItem link="/technology" name="technology" />
          <MenuItem link="/cv" name="cv" />
          <MenuItem link="/contact" name="contact" lastItem />
        </Menu>
        <Menu
          name="external"
          expanded={external.expanded}
          handleClick={handleClick}
        >
          <MenuItem
            external
            link="https://www.linkedin.com/in/stevebunting/"
            name="linkedIn"
          />
          <MenuItem
            external
            link="https://github.com/stebunting"
            name="gitHub"
          />
          <MenuItem
            external
            link="https://stackoverflow.com/users/7440624/steve-bunting"
            name="stackOverflow"
          />
          <MenuItem
            external
            link="https://app.pluralsight.com/profile/stebunting"
            name="pluralsight"
            lastItem
          />
        </Menu>
      </nav>
    </div>
  );
}

export default Sidebar;
