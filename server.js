const express = require('express');
const webpack = require('webpack');
const app = express();
const config = require('./webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));
app.listen(3000, function() {
    console.log('example are linstening on port 3000!\n')
})
