import { graphql, useStaticQuery } from "gatsby";

const getEmojiImgFromQueryData = (emoji, data) => {
  switch (emoji) {
    case "⚛️":
      return data.atom.childImageSharp;
    case "📖":
      return data.book.childImageSharp;
    case "❤️":
      return data.heart.childImageSharp;
    case "🏠":
      return data.house.childImageSharp;
    case "🤘":
      return data.metal.childImageSharp;
    case "🌙":
      return data.moon.childImageSharp;
    case "📦":
      return data.package.childImageSharp;
    case "🎨":
      return data.palette.childImageSharp;
    case "💜":
      return data.purpleHeart.childImageSharp;
    case "💬":
      return data.speechBalloon.childImageSharp;
    case "☀️":
      return data.sun.childImageSharp;
    default:
      return null;
  }
};

export const useEmojiQuery = emoji => {
  return getEmojiImgFromQueryData(
    emoji,
    useStaticQuery(
      graphql`
        query EmojiQuery {
          atom: file(absolutePath: { regex: "/emoji/atom.png/" }) {
            childImageSharp {
              fluid(maxWidth: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          book: file(absolutePath: { regex: "/emoji/book.png/" }) {
            childImageSharp {
              fluid(maxWidth: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          heart: file(absolutePath: { regex: "/emoji/heart.png/" }) {
            childImageSharp {
              fluid(maxWidth: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          house: file(absolutePath: { regex: "/emoji/house.png/" }) {
            childImageSharp {
              fluid(maxWidth: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          metal: file(absolutePath: { regex: "/emoji/metal.png/" }) {
            childImageSharp {
              fluid(maxWidth: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          moon: file(absolutePath: { regex: "/emoji/moon.png/" }) {
            childImageSharp {
              fluid(maxWidth: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          package: file(absolutePath: { regex: "/emoji/package.png/" }) {
            childImageSharp {
              fluid(maxWidth: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          palette: file(absolutePath: { regex: "/emoji/palette.png/" }) {
            childImageSharp {
              fluid(maxWidth: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          purpleHeart: file(
            absolutePath: { regex: "/emoji/purple-heart.png/" }
          ) {
            childImageSharp {
              fluid(maxWidth: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          speechBalloon: file(
            absolutePath: { regex: "/emoji/speech-balloon.png/" }
          ) {
            childImageSharp {
              fluid(maxWidth: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          sun: file(absolutePath: { regex: "/emoji/sun.png/" }) {
            childImageSharp {
              fluid(maxWidth: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `
    )
  );
};
