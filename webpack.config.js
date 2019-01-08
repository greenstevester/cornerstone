
module.exports = (env, argv) => {

  let config = require('./webpack/base.config')(env, argv, __dirname);

  switch (argv.mode) {
    case 'production':
      config = require('./webpack/prod.config')(env, argv, __dirname, config);
      break;
    case 'development':
      config = require('./webpack/dev.config')(env, argv, __dirname, config);
      break;
    default:
      config = require('./webpack/none.config')(env, argv, __dirname, config);
      break;
  }
  return config;
};
