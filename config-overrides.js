// const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

// later after upgrade create-react-app to support
// webpack4 it can be removed becuase it now supports
// async css styles through mini-css-extract-plugin
// that future version of create-react-app also supports
// https://github.com/facebook/create-react-app/blob/next/packages/react-scripts/config/webpack.config.prod.js#L423

module.exports = function override(config, env) {

  // config.plugins = [
  //   ...config.plugins,
  //   new NodePolyfillPlugin()]

  return config;
}
