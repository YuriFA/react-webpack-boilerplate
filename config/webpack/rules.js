module.exports = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
  },
  {
    test: /\.sss$/,
    use: [
      {
        loader: 'style-loader', // creates style nodes from JS strings
      },
      {
        loader: 'css-loader', // translates CSS into CommonJS
        options: {
          modules: true, // modules with classnames
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
