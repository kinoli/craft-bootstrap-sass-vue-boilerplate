const path = require('path')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
// const CopyWebpackPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const devMode = process.env.NODE_ENV !== 'production'

const publicDirStr = devMode ? '../dev' : '../public_html'
const publicDir = path.resolve(__dirname, publicDirStr)
const cms = path.resolve(__dirname, '../cms')
const src = path.resolve(__dirname, '../src')

module.exports = {
  entry: { 'bundle': './src/app.js' },
  output: {
    filename: devMode ? 'js/[name].dev.js' : 'js/[hash:7].[name].min.js',
    path: publicDir + '/lib/',
    publicPath: '/lib/'
  },
  devtool: 'source-map', // any "source-map"-like devtool is possible
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
          options: {
            formatter: require('eslint-friendly-formatter')
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
          // outputPath: publicDir + 'fonts/',
          // publicPath: 'fonts/'
        }
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('precss'),
                  require('autoprefixer')
                ]
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },

  plugins: [
    // Generates a TWIG file that includes all your webpack
    // bundles in the body using style and script tags
    new HtmlWebpackPlugin({
      template: src + '/templates/_layout.twig',
      filename: cms + '/templates/_layout.twig'
    }),
    new HtmlWebpackPlugin({
      template: src + '/.htaccess',
      filename: publicDir + '/.htaccess',
      inject: false
    }),
    new HtmlWebpackPlugin({
      template: src + '/index.php',
      filename: publicDir + '/index.php',
      inject: false
    }),

    // Copy static assets
    // new CopyWebpackPlugin([
    //   {
    //     from: path.resolve(__dirname, "./static"),
    //     to: "static",
    //     ignore: [".*"]
    //   }
    // ]),

    new FriendlyErrorsPlugin(),
    new VueLoaderPlugin()
  ]
}
