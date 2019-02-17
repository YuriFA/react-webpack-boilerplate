import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const env = process.env.NODE_ENV
const isDevMode = env !== 'production'

module.exports = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
  },
  {
    test: /\.(ttf|eot|woff|woff2)$/,
    use: {
      loader: 'url-loader',
      options: {
        limit: 50000, // 50kb
        name: '[name].[ext]',
      },
    },
  },
  {
    test: /\.sss$/,
    use: [
      isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[name]-[local]--[hash:base64:5]',
        },
      },
      {
        loader: 'postcss-loader',
      },
    ],
  },
]
