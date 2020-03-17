import { graphql, useStaticQuery } from "gatsby";

export const useSiteUrlQuery = () => {
  const { site } = useStaticQuery(graphql`
    query siteUrlQuery {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  return site.siteMetadata.siteUrl;
};
