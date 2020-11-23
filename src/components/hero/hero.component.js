import React from "react";
import PropTypes from "prop-types";

// Components
import Container from "../container";

// Styles
import { Heading, HeroContainer } from "./hero.styles";

const Hero = ({ title, children }) => {
  return (
    <HeroContainer maxWidth="100%" margin={0} padding={3}>
      <Container margin={0} maxWidth="900px">
        {title && <Heading>{title}</Heading>}
        {children}
      </Container>
    </HeroContainer>
  );
};

Hero.defaultProps = {
  title: null,
  children: null
};

Hero.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node
};

export default Hero;
