import { graphql, useStaticQuery } from "gatsby";

export const useSeoQuery = () => {
  const { site, defaultImage } = useStaticQuery(graphql`
    query headQuery {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }

      defaultImage: file(absolutePath: { regex: "/default-social.jpg/" }) {
        childImageSharp {
          fixed(width: 1000) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return { siteMetadata: site.siteMetadata, defaultImage };
};
