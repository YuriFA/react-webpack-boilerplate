import CleanWebpackPlugin from 'clean-webpack-plugin'

import paths from './paths'

module.exports = {
  mode: 'production',
  output: {
    path: paths.output,
    filename: 'bundle.js',
    chunkFilename: '[name].[chunkhash].js',
  },
  devtool: 'source-map',
  plugins: [new CleanWebpackPlugin('dist')],
}
