/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1616122412040_2377';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.security = {
    csrf:{
      enable:false
    }
  };

  config.view = {
    defaultViewEngine:'nunjucks'
  };

  config.cors = {
    origin:'*',
    allowMethods:'GET,POST,PUT,DELETE,HEAD,PATCH'
  };

  config.jwt = {
    secret:"Geeorge"
  }

  return {
    ...config,
    ...userConfig,
  };
};
