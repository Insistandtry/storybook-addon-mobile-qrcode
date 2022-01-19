module.exports = {
  "stories": [
    "../examples/**/*.stories.mdx",
    "../examples/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "../src/preset.js",
    // "../dist/preset.js"
  ],
}