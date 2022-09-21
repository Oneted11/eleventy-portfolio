module.exports = function (eleventyConfig) {
  //makes the stylesheets and images and favicons work
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addPassthroughCopy({ "./src/favicons": "/" });
  // specifyis watch foder and processed files dir
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
