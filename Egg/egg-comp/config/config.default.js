/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const path = require("path");
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1616376113606_3889';

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
    database: 'helloworld',
    host: 'localhost', //default
    port: 3306,
    username: 'root', // default
    password: 'root', // default
    timezone: '+08:00',
  };

  config.static = {
    // 访问路径
    prefix:'/',
    // 设置静态文件目录，path包是node的核心模块，可以在上面直接引入
    dir:path.join(appInfo.baseDir,'app/public')
  };

  return {
    ...config,
    ...userConfig,
  };
};
