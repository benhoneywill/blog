export const getTagEmoji = tag => {
  switch (tag) {
    case "CSS":
      return "🎨";
    case "GraphQL":
      return "💜";
    case "JavaScript":
      return "🤘";
    case "Node":
      return "📦";
    case "React":
      return "⚛️";
    default:
      return "";
  }
};
