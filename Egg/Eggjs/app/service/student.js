const Service = require("egg").Service;

class StudentService extends Service {
    // service也实现了方法的复用，如果程序中还有某些地方需要获得学生列表，就可以直接调用而不需要操作数据库
    async getStudentList() {
        try {
            let studentList = await this.app.model.Student.findAll();
            return studentList;
        } catch (e) {
            return null;
        }
    }
    // service中只写与数据库有关的操作，其他参数作为函数参数传入
    async createStudent(name, achievement, clazz_id) {
        try {
            await this.app.model.Student.create({
                name: name,
                achievement: achievement,
                clazz_id: clazz_id
            })
            return true;
        } catch (e) {
            return false;
        }
    }
}

module.exports = StudentService;