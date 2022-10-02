const Image = require("@11ty/eleventy-img");
//image processing shortcode
async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(`./src${src}`, {
    widths: [300, 800, null],
    formats: ["avif", "jpeg"],
    urlPath: "/images/",
    outputDir: "./public/images/",
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
  //makes the stylesheets and images and favicons work
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addPassthroughCopy({ "./src/favicons": "/" });
  // add shortcodes
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addNunjucksAsyncShortcode("EleventyImage", imageShortcode);
  // specifyis watch foder and processed files dir
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
