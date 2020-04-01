import React from "react";
import PropTypes from "prop-types";

// Components
import SEO from "../seo";
import DarkModeToggle from "../dark-mode-toggle";

// Styles
import { Header, BackLink, FixedHeader } from "./layout.styles";

// Icons
import HomeIcon from "../../icons/home.svg";
import ArrowLeftIcon from "../../icons/arrow-left.svg";

const Layout = ({ children, hero, location, ...seoProps }) => {
  const isHomePage = location.pathname === "/";

  return (
    <>
      <SEO {...seoProps} />

      <FixedHeader padding={1} margin={0} maxWidth="100%">
        <Header isHomePage={isHomePage}>
          {!isHomePage && (
            <BackLink title="home" to="/">
              <ArrowLeftIcon />
              <HomeIcon />
            </BackLink>
          )}
          <DarkModeToggle />
        </Header>
      </FixedHeader>

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
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired })
    .isRequired
};

export default Layout;
