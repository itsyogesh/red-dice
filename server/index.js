import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev.js'

import users from './routes/users';

let app = express();

app.use(bodyParser.json());

app.use('/api/users', users);

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  hot: true,
  noInfo: true,
  publicPath: webpackConfig.output.path
}));
app.use(webpackHotMiddleware(compiler))

app.use(express.static(__dirname + '/public'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
});

app.listen(3000, () => console.log("Running on localhost"));
