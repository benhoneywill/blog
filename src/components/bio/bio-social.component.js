import React from "react";

// Icons
import TwitterIcon from "../../icons/twitter.svg";
import LinkedinIcon from "../../icons/linkedin.svg";
import GithubIcon from "../../icons/github.svg";

// Queries
import { useBioQuery } from "./bio.queries";

// Styles
import { SocialIcons, SocialIconItem, SocialIconLink } from "./bio.styles";

const BioSocial = () => {
  const { site } = useBioQuery();
  const { social } = site.siteMetadata;

  return (
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
          color: "var(--linkedinColor)",
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
  );
};

export default BioSocial;
