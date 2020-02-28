import { graphql, useStaticQuery } from "gatsby";

export const useSeoQuery = () => {
  const { site } = useStaticQuery(graphql`
    query seoQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  return site.siteMetadata;
};
