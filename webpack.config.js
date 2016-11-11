module.exports = {
  entry: './client.js',
  output: {
    path: './public',
    filename: 'bundle.js'       
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'] 
  }
};