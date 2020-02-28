import React from "react";
import { Link } from "gatsby";
import Image from "gatsby-image";

// Contexts
import { useTheme } from "../../contexts/theme";

// Icons
import TwitterIcon from "../../icons/twitter.svg";
import LinkedinIcon from "../../icons/linkedin.svg";
import GithubIcon from "../../icons/github.svg";
import InstagramIcon from "../../icons/instagram.svg";

// Queries
import { useBioQuery } from "./bio.queries";

// Styles
import {
  ImageWrapper,
  Wrapper,
  Inner,
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
        <Link href="/">
          <Image fixed={avatar.childImageSharp.fixed} alt={author} />
        </Link>
      </ImageWrapper>

      <Inner>
        <Text>
          Written by <strong>Ben Honeywill</strong>, a UK based front-end
          Engineer at{" "}
          <a href="https://twitter.com/lushengineering">@LushEngineering</a>.
          Teacher, learner and lover of JavaScript.
        </Text>

        <SocialIcons>
          {[
            {
              href: `https://twitter.com/${social.twitter}`,
              color: "#00acee",
              Icon: TwitterIcon
            },
            {
              href: `https://github.com/${social.github}`,
              color: darkMode ? "rgba(255, 255, 255, 0.8)" : "#333333",
              Icon: GithubIcon
            },
            {
              href: `https://instagram.com/${social.instagram}`,
              color: "#9B59B6",
              Icon: InstagramIcon
            },
            {
              href: `https://linkedin.com/in/${social.linkedin}`,
              color: "#2867B2",
              Icon: LinkedinIcon
            }
          ].map(socialItem => (
            <SocialIconItem>
              <SocialIconLink href={socialItem.href}>
                <socialItem.Icon
                  width="1.2rem"
                  height="1.2rem"
                  fill={socialItem.color}
                />
              </SocialIconLink>
            </SocialIconItem>
          ))}
        </SocialIcons>
      </Inner>
    </Wrapper>
  );
};

export default Bio;
