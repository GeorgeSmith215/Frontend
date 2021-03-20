'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
// 暴露一个函数，有一个形参app，也就是整个app应用的实例，通过解构赋值，拿到了实例下的router、controller对象，
// 通过这种方式，就可以进一步定义每一个路径对应的controller。如果以后有更多页面可以在router下加更多路径
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // router.get('/fruits',controller.fruits.index);
  // // "/:XX"形式的数据用.params.XX获取
  // router.get('/fruits/:id',controller.fruits.getId);
  // router.get('/createfruit',controller.fruits.createPage);
  // router.post('/createfruit',controller.fruits.createFruit);

  // RESTful风格URL
  router.resources('fruits','/fruits',controller.fruits);
  router.get('/data',controller.home.getData);
  router.get('/login',controller.home.login);
  router.post('/login',controller.home.doLogin);
  router.post('/logout',controller.home.doLogout);
  router.get('/jwt',controller.jwt.index);
  router.post("/jwtlogin",controller.jwt.doLogin);
  // app.middleware.XXX可以拿到中间件,又因为checkToken是函数,所以要加()调用.
  // 在路径和控制器之间(第二个参数)写中间件使每次请求时都要调用中间件验证
  // 如果有多个数据接口,有很多个router,也只需要在路径和控制器加中间件就可以了,不需要在每个controller里验证
  router.get("/jwtmessage",app.middleware.checkToken(),controller.jwt.getMessage)
};
