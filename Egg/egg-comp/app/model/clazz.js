// clazz.js文件，对应数据库中的clazzs表
// module.exports暴露一个函数，有一个app参数，通过app来获取整个egg应用的实例，
// 通过app.Sequelize来进一步获取Sequelize插件的应用实例
module.exports = app =>{
    const {STRING} = app.Sequelize;
    // 默认情况下，sequelize将自动将所有传递的模型名称(define的第一个参数)转为复数
    // 通过app.model.define方法可以创建一个数据表calzzs，第二个参数{}内定义字段 
    const Clazz = app.model.define('clazz',{
        // sequelize可以自动生成id主键
        clazzname:STRING
    })

    return Clazz;
}

// 班级：id，name