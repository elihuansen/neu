module.exports = {
  chainWebpack: config => config.resolve.set('symlinks', false),
  outputDir: 'dist',
  css: {
    extract: false
  },
};