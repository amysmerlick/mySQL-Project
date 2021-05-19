const Employee = require('./Employee');
const Role = require('./Role');
const Department = require('./Department');

Role.hasMany(Employee, {
    foreignKey: 'role_id'
})

Employee.hasOne(Employee, {as: "manager_id"})
module.exports = { Department, Role, Employee };
