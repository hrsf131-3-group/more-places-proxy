const path = require('path');

const DIST_DIR = path.join(__dirname, '/public/bundles');

module.exports = {
  entry: {
    // imageCarousel: '',
    // reservations: '',
    // reviews: '',
    morePlaces: path.join(__dirname, '/more-places-service/client/src/index.jsx'),
  },
  output: {
    filename: '[name].js',
    path: DIST_DIR,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        // include: SRC_DIR,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
};
