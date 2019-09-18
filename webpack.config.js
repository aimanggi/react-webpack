const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/App.js',
      },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
      },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
          }),
    ],
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader"
              }
            ]
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ]
    
}
}