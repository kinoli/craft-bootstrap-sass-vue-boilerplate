// var dotenv = require('dotenv').config({path: __dirname + '/.env'})
const path = require('path')
const merge = require('webpack-merge')
const dev = require('./webpack.dev.js')

const host = process.env.PRIMARY_DOMAIN

module.exports = merge(dev, {
  devServer: {
    proxy: {
      '/': {
        target: {
          host: host,
          protocol: 'http:',
          port: 80
        },
        changeOrigin: true,
        secure: false
      }
    },
    open: true,
    host: host,
    port: 8080,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    // // disableHostCheck: true,
    stats: 'errors-only',
    watchContentBase: true,
    contentBase: [
      path.join(__dirname, '../dev'), // should point to the public folder
      path.join(__dirname, '../cms/templates') // should point to the public folder
    ]
  },

  watch: true,

  watchOptions: {
    aggregateTimeout: 300,
    ignored: '/node_modules/'
  }
})
