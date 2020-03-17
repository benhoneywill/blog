import { graphql, useStaticQuery } from "gatsby";

export const useSocialIconsQuery = () => {
  const { site } = useStaticQuery(
    graphql`
      query SocialIconsQuery {
        site {
          siteMetadata {
            social {
              twitter
              instagram
              linkedin
              github
            }
          }
        }
      }
    `
  );

  return site.siteMetadata.social;
};
