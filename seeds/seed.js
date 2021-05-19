const sequelize = require('../db/connection');
const { Employee, Department, Role } = require('../models');

const employeeSeedData = require('./employee_seeds');
const roleSeedData = require('./role_seeds.json');
const departmentSeedData = require('./department_seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const departments = await Department.bulkCreate(departmentSeedData);

  const roles = await Role.bulkCreate(roleSeedData);

  const employees = await Employee.bulkCreate(employeeSeedData)
  

  process.exit(0);
};

seedDatabase();
