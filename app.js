const inquirer = require('inquirer');
const mysql = require('mysql');
require("dotenv").config()
const connection = mysql.createConnection({
  host: 'localhost',
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: process.env.DB_USER,
  // Be sure to update with your own MySQL password!
  password: process.env.MYSQLPASSWORD,
  database: process.env.DB_NAME,
});
connection.connect((err) => {
  if (err) throw err;
  runSearch();
});
function runSearch() {
  inquirer.prompt(
    [
      {
        name: 'action',
        type: 'rawlist',
        message: 'What would you like to do?',
        choices: [
          'view all employees',
          'view all employees by department',
          'view all employees by Manager',
          'Add an Employee',
          'Remove an Employee',
          'Update Employee Role',
          'Update Employee Manager',
          'exit',
        ],
      }
    ]
  ).then((answers) => {
    console.log(answers)
    if (answers.action === 'exit') {
      connection.end()
      return
    } else if (answers.action === 'view all employees') {
      viewAllEmployees()
    } else if (answers.action === 'view all employees by department') {
      viewAllByDepartments()
    } else if (answers.action === 'view all employees by Manager') {
      viewAllByManagers()
    } else if (answers.action === 'Add an Employee') {
      addEmployee()
    }  else if (answers.action === 'Remove an Employee') {
      removeEmployee()
    }
  }
  );
}

  function viewAllEmployees() {
  connection.query('SELECT * FROM employee', (err, res) => {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.table(res);
    runSearch();
    //connection.end();
  });
};
// function viewAllRoles() {
//   connection.query('SELECT * FROM roles', (err, res) => {
//     if (err) throw err;
//     // Log all results of the SELECT statement
//     console.table(res);
//     connection.end();
//   });
// };
function viewAllByDepartments() {
  let query = 'SELECT first_name, last_name, title, salary FROM employee LEFT JOIN roles ON employee.id = roles.id';
  connection.query(query, (err, res) => {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.table(res);
    // connection.end(); (err, res) => {
    //   if (err) throw err;
    //   // Log all results of the SELECT statement
    //   console.table(res);
      //connection.end();
      runSearch();
    });
    
};

function viewAllByManagers() {
  let query = 'SELECT e.first_name as \'First\', e.last_name, e.manager_id, m.first_name as \'Manager First Name\', m.last_name as \'Manager Last Name\' FROM employee e LEFT JOIN employee m ON e.manager_id = m.id';
  connection.query(query, (err, res) => {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.table(res);
    // connection.end(); (err, res) => {
    //   if (err) throw err;
    //   // Log all results of the SELECT statement
    //   console.table(res);
      //connection.end();
      runSearch();
    });
    
};

const removeEmployee = () => {

  connection.query('SELECT * FROM employee', (err, res) => {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.table(res);

    inquirer.prompt(
      [
        {
          name: 'employee_id',
          type: 'number',
          message: 'Enter the id of the employee to remove',
        }
      ]
    ).then((answers) => {

      console.log('Deleting employee...\n');
      connection.query(
        'DELETE FROM employee WHERE ?',
        {
          id: answers.employee_id
        },
        (err, res) => {
          if (err) throw err;
          console.log(`${res.affectedRows} employee deleted!\n`);
          // Call readProducts AFTER the DELETE completes
          runSearch();
        }
      );
      

      
    })

    
    //connection.end();
  });

  
}

const addEmployee = () => {

  let questions = [
    {
      type: 'input',
      name: "first_name",
      message: "What is the new employee's first name"
    },
    {
      type: 'input',
      name: "last_name",
      message: "What is the new employee's last name"
    },
    {
      type: 'number',
      name: "roles_id",
      message: "What is the new employee's role"
    },
    {
      type: 'number',
      name: "manager_id",
      message: "What is the new employee's manager's id"
    }
  ]

  inquirer.prompt(questions)
  .then((answers) => {

    connection.query(
      'INSERT INTO employee SET ?',
      answers,
      (err, res) => {
        if (err) throw err;
        console.log(`Employee added!\n`);
        // Call readProducts AFTER the DELETE completes
        runSearch();
      }
    );
    
  })


}