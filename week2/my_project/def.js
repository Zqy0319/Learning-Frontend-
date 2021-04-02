#!/usr/bin/env node
const commander = require('commander'); // (normal include)
const program = new commander.Command();

program
  .command('build')
  .description('build web site for deployment')
  .action(() => {
    console.log('build');
  });

program
  .command('dev')
  .description('deploy web site to production')
  .action(() => {
    const Webpack = require('webpack')
    const webpackConfig = require('./webpack.config')
    const WebpackDevServer = require('webpack-dev-server')
    const compiler = Webpack(webpackConfig);
    const devServerOptions = Object.assign({}, webpackConfig.devServer, {
      open: true,
    });
    const server = new WebpackDevServer(compiler, devServerOptions)
    server.listen(5050, '127.0.0.1', () => {
      console.log('Starting server on http://localhost:5050');
    });
  });

program
  .command('serve', { isDefault: true })
  .description('launch web server')
  .option('-p,--port <port_number>', 'web port')
  .action((options) => {
    console.log(`server on port ${options.port}`);
  });

program.parse(process.argv);