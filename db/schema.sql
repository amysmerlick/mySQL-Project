DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE,
    PRIMARY KEY (id)
);
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    roles_id INT NOT NULL,
    manager_id INT NULL,
    FOREIGN KEY (roles_id) REFERENCES roles(id) ON DELETE CASCADE,
    PRIMARY KEY (id)
);
use employee_db;

INSERT INTO department(department_name) VALUES ('accouting'), ('sales'), ('engineering'), ('legal');
INSERT INTO roles(title, salary, department_id) VALUES ('Accountant', 120000, 1), ('Account Manager', 150000, 1), ('Sales Rep', 75000, 2), ('Sales Lead', 125000, 2), ('Junior Developer', 60000, 3), ('Senior Software Developer', 175000, 3 ), ('Legal Assistant', 35000, 4), ('Lawyer', 175000, 4);
INSERT INTO employee(first_name, last_name, roles_id, manager_id) VALUES ('Ben', 'Simmons', 1, null), ('Joel', 'Embiid', 2, 1), ('Allen', 'Iverson', 3, 4), ('Doc', 'Rivers', 4, null), ('John', 'Smith', 2, 1), ('Abraham', 'Lincoln', 6, 1), ('Harry', 'Potter', 7, 4);