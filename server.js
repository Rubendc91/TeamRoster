// TODO: Include packages needed for this application
const inquirer = require('inquirer');
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
        'View All Departments',
        'View All Roles',
        'View All Employees',
        'Add Department',
        'Add Role',
        'Add Employee',
        'Update Employee Role',
        'End'
      ]
    }
  ])
    .then((answers) => {
      const { menu } = answers;

      
      if (menu === 'View All Departments') {
        viewAllDepartments();
      }
      
      if (menu === 'View All Roles') {
        viewAllRoles();
      }
      
      if (menu === 'View All Employees') {
        viewAllEmployees();
      }

      if (menu === 'Add Department') {
        addDepartment();
      }
      
      if (menu === 'Add Role') {
        addRole();
      }
      
      if (menu === 'Add Employee') {
        viewAllRoles();
      }
      
      if (menu === 'Update Employee Role') {
        viewAllRoles();
      }
      
      if (menu === 'End') {
        connect.end()
      }
    })
};

//-----View-----//
viewAllDepartments = () => {
  const sql = `SELECT department.name AS department FROM department`;
  console.log("hello")

  connect.query(sql, (err, res) => {
    if (err) throw err;
    console.table(res);
    questions();
  });
};

viewAllRoles = () => {
  const sql = `SELECT roles.title AS role, roles.department_id AS department FROM roles`;
  connect.query(sql, (err, res) => {
    if (err) throw err;
    console.table(res);
    questions();
  });
};

viewAllEmployees = () => {
  const sql = `SELECT employee.employee_id AS id, employee.first_name AS first_name FROM employee`;

  connect.query(sql, (err, res) => {
    if (err) throw err;
    console.table(res);
    questions();
  });
};

//-----Add-----//
addDepartment = () => {
  inquirer.prompt([
    {
      type: 'input', 
      name: 'addDepartement',
      message: "What department do you want to add?",
    }
  ])
    .then(answer => {
      const sql = `INSERT INTO department (name)
                  VALUES (?)`;
      connect.query(sql, answer.addDepartement, (err, result) => {
        if (err) throw err;
        console.log(`Added ${answer.addDepartement} to departments!`); 

        viewAllDepartments();
    });
  });
};

addRole = () => {
  inquirer.prompt([
    {
      type: 'input', 
      name: 'title',
      message: "What role do you want to add?",
    },
    {
      type: 'input', 
      name: 'salary',
      message: "What is the salary for this role?",
    }
  ])
  .then(answer => {
    const params = [answer.title, answer.salary];

    // grab dept from department table
    const roleSql = `SELECT name , department_id FROM department`; 

    connect.query(roleSql, (err, data) => {
      if (err) throw err; 
  
      const dept = data.map(({ name, department_id }) => ({ name: name, value: department_id }));
      console.log(params)

      inquirer.prompt([
      {
        type: 'list', 
        name: 'department',
        message: "What department is this role in?",
        choices: dept
      }
      ])
        .then(depAnswer  => {
          const dept = depAnswer.department;
          params.push(dept);
          const sql = `INSERT INTO roles (title, salary, department_id)
                      VALUES (?, ?, ?)`;

          connect.query(sql, params, (err, result) => {
            if (err) throw err;
            console.log(`Added ${answer.role} to roles!`); 

            viewAllRoles();
     });
   });
 });
});
};