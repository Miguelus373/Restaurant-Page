const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
          {
            loader: 'image-webpack-loader',
            options: {
              // Compresses JPEG images
              mozjpeg: {
                progressive: true,
              },
              // Compresses PNG images
              optipng: {
                enabled: false,
              },
              // Compresses PNG images
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4,
              },
              // Compresses GIF images
              gifsicle: {
                interlaced: false,
              },
              // Compresses JPG and PNG into WEBP
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },
};