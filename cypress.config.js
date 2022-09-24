const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "svelte",
      bundler: "webpack",
    },
  },
  transform: {
    '^.+\\.svelte$': 'svelte-jester',
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: [
      "node_modules/?!(svelte-routing)"
    ],
  moduleFileExtensions: ['js', 'svelte'],
});