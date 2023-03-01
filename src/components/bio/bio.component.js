import React from "react";
import { Link } from "gatsby";
import Image from "gatsby-image";

// Queries
import { useBioQuery } from "./bio.queries";

// Styles
import { Wrapper, Header, Text, ImageWrapper } from "./bio.styles";
import BioSocial from "./bio-social.component";

const Bio = () => {
  const { avatar, site } = useBioQuery();
  const { author } = site.siteMetadata;

  return (
    <Wrapper>
      <ImageWrapper>
        <Link href="/">
          <Image fixed={avatar.childImageSharp.fixed} alt={author} />
        </Link>
      </ImageWrapper>

      <Header>I am Ben Honeywill.</Header>

      <Text>
        I&#39;m a <strong>Front-End Software Engineer</strong> from the UK.
        Thank you for stopping by.
      </Text>

      <BioSocial />
    </Wrapper>
  );
};

export default Bio;
