// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const mysql = require('mysql2');

// require('dotenv').config();

const connect = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'team_db'
});

connect.connect(err => {
  if (err) throw err;
  console.log('connected as id ' + connect.threadId);
  afterConnection();
});

afterConnection = () => {
  console.log(`===========`);
  console.log(``);
  console.log(`Team Roster`);
  console.log(``);
  console.log(`===========`);
  questions();
};



// TODO: Create an array of questions for user list
const questions = () => {
  inquirer.prompt([
    {
      type: 'list',
      message: "What would you like to do",
      name: 'menu',
      choices: [
        'View All Employees',
        'Add Employee',
        'update Employee Role',
        'Add Role',
        'View All',
        'Add Department'
      ]
    }
  ])
    .then((answers) => {
      const { menu } = answers;

      if (menu === 'View All Employees') {
        viewAllEmployees();
      }

      // if (choices === 'View All Departments') {
      //   viewAllDepartments();
      // }
    })
};


viewAllEmployees = () => {
  const sql = `SELECT employee.employee_id AS id, employee.first_name AS first_name FROM employee`;

  connect.query(sql, (err, rows) => {
    if (err) throw err;
    console.log(rows);
    questions();
  });
};