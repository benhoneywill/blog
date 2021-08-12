import React from "react";
import { Link } from "gatsby";
import Image from "gatsby-image";

// Icons
import TwitterIcon from "../../icons/twitter.svg";
import LinkedinIcon from "../../icons/linkedin.svg";
import GithubIcon from "../../icons/github.svg";

// Queries
import { useBioQuery } from "./bio.queries";

// Components
import Emoji from "../emoji";

// Styles
import {
  Wrapper,
  Header,
  Text,
  SocialIcons,
  SocialIconItem,
  SocialIconLink,
  ImageWrapper
} from "./bio.styles";

const Bio = () => {
  const { avatar, site } = useBioQuery();
  const { author, social } = site.siteMetadata;

  return (
    <Wrapper>
      <ImageWrapper>
        <Link href="/">
          <Image fixed={avatar.childImageSharp.fixed} alt={author} />
        </Link>
      </ImageWrapper>

      <Header>
        Hi <Emoji emoji="👋" label="Wave" /> I&#39;m Ben.
      </Header>

      <Text>
        I&#39;m a <strong>Front-End Engineer</strong> from the UK. Welcome to my
        small corner of the internet!
      </Text>

      <SocialIcons>
        {[
          {
            href: `https://twitter.com/${social.twitter}`,
            color: "#00acee",
            Icon: TwitterIcon,
            title: "Twitter"
          },
          {
            href: `https://github.com/${social.github}`,
            color: "var(--textColor)",
            Icon: GithubIcon,
            title: "Github"
          },
          {
            href: `https://linkedin.com/in/${social.linkedin}`,
            color: "#0072bb",
            Icon: LinkedinIcon,
            title: "Linkedin"
          }
        ].map(socialItem => (
          <SocialIconItem key={socialItem.href}>
            <SocialIconLink
              title={socialItem.title}
              href={socialItem.href}
              rel="noreferrer"
              target="_blank"
            >
              <socialItem.Icon
                width="1.2rem"
                height="1.2rem"
                fill={socialItem.color}
              />
            </SocialIconLink>
          </SocialIconItem>
        ))}
      </SocialIcons>
    </Wrapper>
  );
};

export default Bio;
