'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/login',controller.login.login);
  router.post('/register',controller.register.register);
  router.resources("student",'/',app.middleware.checkToken(),controller.student);
  router.resources('clazz','/clazz',app.middleware.checkToken(),controller.clazz);
};
