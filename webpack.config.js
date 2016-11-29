const { DefinePlugin } = require('webpack');


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
  },
  plugins: [
  new DefinePlugin({
    GOOGLE_PLACES_AUTOCOMPLETE_PUBLIC_KEY: JSON.stringify(process.env.GOOGLE_PLACES_AUTOCOMPLETE_PUBLIC_KEY)
  })
  ]
};