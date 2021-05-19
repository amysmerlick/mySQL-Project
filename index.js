const connection = require('./db/connection.js');
class DB {
constructor(connection){
    this.connection = connection
}
findAllDepartments(){
    return this.connection.query('SELECT * FROM department')
}
}
module.exports = new DB (connection)