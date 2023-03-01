import React from "react";

// Styles
import {
  HomeHeroContentContainer,
  Heading,
  Tagline
} from "./home-hero-content.styles";
import BioSocial from "../bio/bio-social.component";

const HomeHeroContent = () => {
  return (
    <HomeHeroContentContainer maxWidth="900px" margin={0} padding={3}>
      <Heading>I am Ben Honeywill</Heading>
      <Tagline>Front-End Web Engineer.</Tagline>
      <BioSocial />
    </HomeHeroContentContainer>
  );
};

HomeHeroContent.propTypes = {};

export default HomeHeroContent;
