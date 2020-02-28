import React from "react";
import { Link } from "gatsby";

// Components
import DarkModeToggle from "../dark-mode-toggle";

// Styles
import { NavLink, Flex } from "./page-header.styles";

const PageHeader = () => {
  return (
    <header>
      <Flex>
        <NavLink>
          <Link href="/">← Home</Link>
        </NavLink>
        <DarkModeToggle />
      </Flex>
    </header>
  );
};

export default PageHeader;
