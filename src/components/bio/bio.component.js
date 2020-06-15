import React from "react";
import Image from "gatsby-image/withIEPolyfill";

// Contexts
import { useTheme } from "../../contexts/theme";

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
  ImageWrapper,
  Wrapper,
  Text,
  SocialIcons,
  SocialIconItem,
  SocialIconLink
} from "./bio.styles";

const Bio = () => {
  const { darkMode } = useTheme();
  const { avatar, site } = useBioQuery();
  const { author, social } = site.siteMetadata;

  return (
    <Wrapper>
      <ImageWrapper>
        <Image fixed={avatar.childImageSharp.fixed} alt={author} />
      </ImageWrapper>

      <div style={{ fontSize: 20 }}>
        <Text>
          I am <strong>Ben Honeywill</strong>. I&#39;m a Front-End Engineer from
          the UK. I work for <a href="https://twitter.com/LushLtd">@LushLtd</a>.{" "}
          Web development <Emoji emoji="❤️" label="Heart" /> Javascript{" "}
          <Emoji emoji="🤘" label="Awesome" />
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
              color: darkMode ? "rgba(255, 255, 255, 0.8)" : "#333333",
              Icon: GithubIcon,
              title: "Github"
            },
            {
              href: `https://linkedin.com/in/${social.linkedin}`,
              color: darkMode ? "#00a0dc" : "#0072bb",
              Icon: LinkedinIcon,
              title: "Linkedin"
            }
          ].map(socialItem => (
            <SocialIconItem key={socialItem.href}>
              <SocialIconLink title={socialItem.title} href={socialItem.href}>
                <socialItem.Icon
                  width="1.2rem"
                  height="1.2rem"
                  fill={socialItem.color}
                />
              </SocialIconLink>
            </SocialIconItem>
          ))}
        </SocialIcons>
      </div>
    </Wrapper>
  );
};

export default Bio;
