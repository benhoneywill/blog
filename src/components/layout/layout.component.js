import React from "react";
import PropTypes from "prop-types";

// Components
import SEO from "../seo";
import Container from "../container";
import DarkModeToggle from "../dark-mode-toggle";

// Styles
import { Header, BackLink } from "./layout.styles";

// Icons
import HomeIcon from "../../icons/home.svg";
import ArrowLeftIcon from "../../icons/arrow-left.svg";

const Layout = ({ children, hero, location, ...seoProps }) => {
  const isHomePage = location.pathname === "/";

  return (
    <>
      <SEO {...seoProps} />

      <Container padding={1} margin={0} maxWidth="100%" absolute={hero}>
        <Header isHomePage={isHomePage}>
          {!isHomePage && (
            <BackLink title="home">
              <ArrowLeftIcon />
              <HomeIcon />
            </BackLink>
          )}
          <DarkModeToggle />
        </Header>
      </Container>

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
