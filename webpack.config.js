module.exports = (env, argv) => {

  if (argv.workshop) {
    return require('./webpack/workshop.config')(env, argv, __dirname);
  }

  let config = require('./webpack/base.config')(env, argv, __dirname);

  switch (argv.mode) {
    case 'production':
      config = require('./webpack/prod.config')(env, argv, __dirname, config);
      break;
    case 'development':
      config = require('./webpack/prod.config')(env, argv, __dirname, config);
      break;
    default:
      config = require('./webpack/prod.config')(env, argv, __dirname, config);
      break;
  }
  return config;
};
