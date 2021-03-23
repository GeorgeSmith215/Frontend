// 在系统启动的时候会执行beforeStart函数，类似Vue的生命周期函数
module.exports = app => {  
    if (app.config.env === 'local' || app.config.env === 'unittest') {    
      app.beforeStart(async () => {      
        // force:true在开发环境使用，每次重启服务器都会删除所有表，再重新按model去创建新的表，实现数据全部清空的作用
        // await app.model.sync({force: true});
        // 可以通过app.model来拿到数据模型，model有一个sync方法，可以根据模型创建表，
        // 模型即是app目录下的model里的所有模型(js文件)
        await app.model.sync();
      });  
  }};