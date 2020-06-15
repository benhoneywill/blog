export const getTagEmoji = tag => {
  switch (tag) {
    case "CSS":
      return "🎨";
    case "GraphQL":
      return "💜";
    case "JavaScript":
      return "🤘";
    case "NodeJS":
      return "📦";
    case "React":
      return "⚛️";
    default:
      return "";
  }
};
