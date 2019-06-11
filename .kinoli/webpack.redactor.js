const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const EventHooksPlugin = require('event-hooks-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

process.env.NODE_ENV = 'production'
const cmsDir = path.resolve(__dirname, '../cms')

module.exports = {
  entry: { 'kinoli': './src/scss/redactor/index.scss' },
  output: {
    filename: 'resources/[name].js',
    path: cmsDir + '/config/redactor/'
  },
  stats: 'errors-only',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // or MiniCssExtractPlugin.loader
          { loader: 'css-loader', options: { sourceMap: false } }, // translates CSS into CommonJS
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

  watch: true,

  watchOptions: {
    aggregateTimeout: 300,
    ignored: '/node_modules/'
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'resources/[name].css'
    }),
    // new OptimizeCssAssetsPlugin(),
    new EventHooksPlugin({
      done: () => {
        console.log('\x1b[30m')
        console.log('\x1b[46m')
        console.log(' DONE: Redactor Updated ')
        console.log('\x1b[0m')
        // console.log('\x1b[36m%s\x1b[0m', 'For remote delivery, don\'t forget to upload: /cms/config/redactor/resources/kinoli.css')
      }
  })
  ]
}
232