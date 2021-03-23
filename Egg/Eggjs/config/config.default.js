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
    secret:"George"
  };

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql 
    database: 'test',
    host: 'localhost', //default
    port: 3306,
    username: 'root', // default
    password: 'root', // default
    timezone: '+08:00',
  };

  return {
    ...config,
    ...userConfig,
  };
};

