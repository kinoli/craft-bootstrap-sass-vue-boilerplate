const path = require('path')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

process.env.NODE_ENV = 'production'
const common = require('./webpack.common.js')

const publicDir = path.resolve(__dirname, '../public_html')

module.exports = merge(common, {
  // Use the compiler-included build of Vue
  resolve: {
    alias: {
      // Use .min.js in production
      vue$: 'vue/dist/vue.min.js'
    }
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true,
          loaders: {
            html: 'html-loader',
            js: 'babel-loader',
            scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
          }
        }
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['vue', 'es2015'],
          plugins: ['transform-es2015-arrow-functions', 'transform-class-properties', 'transform-object-rest-spread']
        }
      },
      {
        test: /\.scss$/,
        exclude: path.resolve(__dirname, '../src/components'),
        use: [
          // { loader: 'vue-style-loader' },
          MiniCssExtractPlugin.loader, // or MiniCssExtractPlugin.loader
          { loader: 'css-loader', options: { sourceMap: false, minimize: true } }, // translates CSS into CommonJS
          { loader: 'sass-loader', options: { sourceMap: false } } // compiles Sass to CSS
        ]
      }
    ]
  },

  optimization: {
    runtimeChunk: false,
    splitChunks: {
      chunks: 'all'
    }
  },

  plugins: [
    new CleanWebpackPlugin([publicDir] + '/lib'),
    new MiniCssExtractPlugin({
      filename: 'css/[hash:7].[name].min.css'
    }),
    new OptimizeCssAssetsPlugin({
      // assetNameRegExp: /\.optimize\.css$/g,
      // cssProcessor: require('cssnano'),
      // cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
      // canPrint: true
    })
  ]
})
