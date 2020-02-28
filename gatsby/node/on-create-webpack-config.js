module.exports = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: ["src", "content", "node_modules"]
    }
  });
};
