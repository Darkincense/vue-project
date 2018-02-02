var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //下面两行，作用相同，选择自己比较喜欢的样式即可
        use: [ 'style-loader', 'css-loader' ]
        // loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        //下面两行，作用相同，选择自己比较喜欢的样式即可
        loader: 'style-loader!css-loader!less-loader'
        // use: [
        //   'style-loader',
        //   {
        //     loader: 'css-loader', 
        //     options: { 
        //       importLoaders: 1 
        //     } 
        //   },
        //   'less-loader'
        // ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  // dev: { // dev 环境
  //   env: require('./dev.env'), // 使用 config/dev.env.js 中定义的编译环境
  //   port: 8080, // 运行测试页面的端口
  //   assetsSubDirectory: 'static', // 编译输出的二级目录
  //   assetsPublicPath: '/', // 编译发布的根目录，可配置为资源服务器域名或 CDN 域名
  //   proxyTable: {}, // 需要 proxyTable 代理的接口（可跨域）
  //   // CSS Sourcemaps off by default because relative paths are "buggy"
  //   // with this option, according to the CSS-Loader README
  //   // (https://github.com/webpack/css-loader#sourcemaps)
  //   // In our experience, they generally work as expected,
  //   // just be aware of this issue when enabling this option.
  //   cssSourceMap: false, // 是否开启 cssSourceMap
  //   host: '0.0.0.0'
  // },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
