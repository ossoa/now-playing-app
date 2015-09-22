var npm_dir = __dirname + '/node_modules';

var config = {
  addVendor: function (name, path) {
    this.resolve.alias[name] = path;
    this.module.noParse.push(new RegExp(path));
  },
  entry: ['./app/main.jsx'],
  resolve: { alias: {} },
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    noParse: [npm_dir + '/react/react.min.js'],
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'jsx-loader'
      },
      
      // SASS
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  }
};

config.addVendor('react', npm_dir + '/react/dist/react.min.js');

module.exports = config;
