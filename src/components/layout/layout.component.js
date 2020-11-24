import React from "react";
import PropTypes from "prop-types";

// Components
import Head from "../head";
import DarkModeToggle from "../dark-mode-toggle";

// Styles
import {
  Header,
  BackLink,
  Wrapper,
  DarkModeToggleWrapper
} from "./layout.styles";

// Icons
import ArrowLeftIcon from "../../icons/arrow-left.svg";

const Layout = ({ children, hero, location, ...headProps }) => {
  const isHomePage = location.pathname === "/";

  return (
    <>
      <Head {...headProps} />

      <Header padded padding={1} margin={0} maxWidth="100%">
        <Wrapper isHomePage={isHomePage}>
          {!isHomePage && (
            <BackLink title="Home" to="/">
              <ArrowLeftIcon height="1.6rem" width="1.6rem" />
            </BackLink>
          )}
          <DarkModeToggleWrapper>
            <DarkModeToggle />
          </DarkModeToggleWrapper>
        </Wrapper>
      </Header>

      {children}
    </>
  );
};

Layout.defaultProps = {
  hero: true
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hero: PropTypes.bool,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default Layout;
