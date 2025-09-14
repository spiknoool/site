// Import Luxon for date formatting
const { DateTime } = require("luxon");

// Import Eleventy RSS plugin
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  // Passthroughs for static assets
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/images");

  // RSS plugin
  eleventyConfig.addPlugin(pluginRss);

  // Blog post collection with prev/next links
  eleventyConfig.addCollection("posts", function(collection) {
    const posts = collection.getFilteredByTag("posts");
    for (let i = 0; i < posts.length; i++) {
      posts[i].data.prevPost = posts[i - 1] || null;
      posts[i].data.nextPost = posts[i + 1] || null;
    }
    return posts;
  });

  // Date filters
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc+9" }).toFormat("yyyy-LL-dd");
  });

  eleventyConfig.addFilter("topDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc+9" }).toFormat("yyyy LLLL dd");
  });

  // Eleventy directory config
  return {
    dir: {
      input: "src",   // source folder
      output: "public" // output folder matches workflow
    }
  };
};
