import { graphql, useStaticQuery } from "gatsby";

export const useBioQuery = () => {
  const { site, avatar } = useStaticQuery(
    graphql`
      query BioQuery {
        avatar: file(absolutePath: { regex: "/technologist.png/" }) {
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }

        site {
          siteMetadata {
            author
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

  return { site, avatar };
};
