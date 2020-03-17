import React from "react";

// Contexts
import { useTheme } from "../../contexts/theme";

// Icons
import TwitterIcon from "../../icons/twitter.svg";
import LinkedinIcon from "../../icons/linkedin.svg";
import GithubIcon from "../../icons/github.svg";
import InstagramIcon from "../../icons/instagram.svg";

// Queries
import { useSocialIconsQuery } from "./social-icons.queries";

// Styles
import {
  SocialIconsList,
  SocialIconItem,
  SocialIconLink
} from "./social-icons.styles";

const SocialIcons = () => {
  const { darkMode } = useTheme();
  const { twitter, instagram, linkedin, github } = useSocialIconsQuery();

  return (
    <SocialIconsList>
      {[
        {
          href: `https://twitter.com/${twitter}`,
          color: "#00acee",
          Icon: TwitterIcon
        },
        {
          href: `https://github.com/${github}`,
          color: darkMode ? "rgba(255, 255, 255, 0.8)" : "#333333",
          Icon: GithubIcon
        },
        {
          href: `https://instagram.com/${instagram}`,
          color: "#9B59B6",
          Icon: InstagramIcon
        },
        {
          href: `https://linkedin.com/in/${linkedin}`,
          color: darkMode ? "#3b94ff" : "#2867B2",
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
    </SocialIconsList>
  );
};

export default SocialIcons;
