import { graphql, useStaticQuery } from "gatsby";

const emojiMap = {
  "⚛️": "atom",
  "📖": "book",
  "💥": "explode",
  "❤️": "heart",
  "🏠": "house",
  "🤘": "metal",
  "🌙": "moon",
  "📦": "package",
  "🎨": "palette",
  "💜": "purple-heart",
  "💬": "speech-balloon",
  "☀️": "sun",
  "👋": "wave"
};

const getEmojiImgFromQueryData = (emoji, data) => {
  const name = emojiMap[emoji];
  const emojiData =
    data.emoji.edges.find(({ node }) => node.name === name) || {};
  return emojiData.node ? emojiData.node.childImageSharp : null;
};

export const useEmojiQuery = emoji => {
  return getEmojiImgFromQueryData(
    emoji,
    useStaticQuery(graphql`
      query EmojiQuery {
        emoji: allFile(
          filter: { extension: { regex: "/png/" }, dir: { regex: "/emoji/" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `)
  );
};
