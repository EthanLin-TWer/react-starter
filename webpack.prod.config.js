const { merge } = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const ManifestPlugin = require('webpack-assets-manifest')
const { baseConfig } = require('./webpack.base.config')

module.exports = merge(baseConfig, {
  mode: 'production',
  stats: {
    colors: true,
    children: true,
  },
  optimization: {
    minimize: true,
    usedExports: true,
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'BundleAnalyzerReport.html',
    }),
    new ManifestPlugin(),
  ],
})
