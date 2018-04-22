'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1524418069565_8396';

  // add your config here
  config.middleware = [];
  
  config.security = {
    csrf: false,
  };

  return config;
};
