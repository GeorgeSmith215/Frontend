module.exports = app =>{
    // const {XXX,...} = app.Sequelize引入需要的数据类型
    const {STRING,DOUBLE} = app.Sequelize;
    // 默认情况下，sequelize将自动将所有传递的模型名称(define的第一个参数)转为复数
    // 通过app.model.define方法可以创建一个数据表calzzs，第二个参数{}内定义字段 
    const Student = app.model.define('student',{
        // sequelize可以自动生成id主键
        name:STRING,
        achievement:DOUBLE
    });

    Student.associate = function(){
        // 所属班级，指向班级主键
        app.model.Student.belongsTo(app.model.Clazz,{
            foreignKey:'clazz_id',
            as:'clazz'
        })
    }

    return Student;
}