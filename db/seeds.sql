use employee_db;

INSERT INTO department(department_name) VALUES ('accouting'), ('sales'), ('engineering'), ('legal');
INSERT INTO roles(title, salary, department_id) VALUES ('Accountant', 120000, 1), ('Account Manager', 150000, 1), ('Sales Rep', 75000, 2), ('Sales Lead', 125000, 2), ('Junior Developer', 60000, 3), ('Senior Software Developer', 175000, 3 ), ('Legal Assistant', 35000, 4), ('Lawyer', 175000, 4);
INSERT INTO employee(first_name, last_name, roles_id, manager_id) VALUES ('Ben', 'Simmons', 1, null), ('Joel', 'Embiid', 2, 1), ('Allen', 'Iverson', 3, 4), ('Doc', 'Rivers', 4, null);


-- SELECT employee.id, department.id
-- FROM employee
-- INNER JOIN department ON employee.id = department.id;