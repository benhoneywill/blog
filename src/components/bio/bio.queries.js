import { graphql, useStaticQuery } from "gatsby";

export const useBioQuery = () => {
  const { site, avatar } = useStaticQuery(
    graphql`
      query BioQuery {
        site {
          siteMetadata {
            author
            social {
              twitter
              linkedin
              github
            }
          }
        }
      }
    `
  );

  return { site, avatar };
};
