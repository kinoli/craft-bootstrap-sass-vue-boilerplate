module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    /*
    node-sass provides binding for Node.js to LibSass, a Sass compiler.
    sass-loader is a loader for Webpack for compiling SCSS/Sass files.
    style-loader injects our styles into our DOM.
    css-loader interprets @import and @url() and resolves them.
    */
    const path = require('path');

    config.module.rules.push({
      test: /\.scss$/,
      use: ['vue-style-loader', 'style-loader', 'css-loader', {
				loader: 'sass-loader',
				options: {
					prependData: `
						@import "./src/scss/vue-globals";
          `,
				}
			}],
    });

    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve('./src/'),
    ];
    config.resolve.alias = {
      '@': path.resolve('./src/'),
      vue: 'vue/dist/vue.esm.js',
    }

    // Return the altered config
    return config;
  },
}
