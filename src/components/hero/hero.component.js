import React from "react";
import PropTypes from "prop-types";

// Components
import Container from "../container";

// Contexts
import { useTheme } from "../../contexts/theme";

// Styles
import { Heading } from "./hero.styles";

const Hero = ({ title, children }) => {
  const { darkMode } = useTheme();

  return (
    <Container
      maxWidth="100%"
      margin={0}
      padding={3}
      bg={darkMode ? "#111111" : "#f3f3f3"}
    >
      {title && <Heading>{title}</Heading>}
      {children && children}
    </Container>
  );
};

Hero.defaultProps = {
  title: null,
  children: null
};

Hero.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default Hero;