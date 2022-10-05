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
  console.log(`========================================================================================================================================`);
  console.log(``);
  console.log(` ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄       ▄▄       ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ 
  ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░▌     ▐░░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
   ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░▌░▌   ▐░▐░▌     ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀  ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌
       ▐░▌     ▐░▌          ▐░▌       ▐░▌▐░▌▐░▌ ▐░▌▐░▌     ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌               ▐░▌     ▐░▌          ▐░▌       ▐░▌
       ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░▌ ▐░▐░▌ ▐░▌     ▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄▄▄      ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌
       ▐░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌  ▐░▌     ▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌     ▐░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
       ▐░▌     ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░▌   ▀   ▐░▌     ▐░█▀▀▀▀█░█▀▀ ▐░▌       ▐░▌ ▀▀▀▀▀▀▀▀▀█░▌     ▐░▌     ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀█░█▀▀ 
       ▐░▌     ▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌     ▐░▌  ▐░▌       ▐░▌          ▐░▌     ▐░▌     ▐░▌          ▐░▌     ▐░▌  
       ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌      ▐░▌ ▐░█▄▄▄▄▄▄▄█░▌ ▄▄▄▄▄▄▄▄▄█░▌     ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌      ▐░▌ 
       ▐░▌     ▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌     ▐░▌     ▐░░░░░░░░░░░▌▐░▌       ▐░▌
        ▀       ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀         ▀       ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀       ▀       ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀`);
  console.log(``);
  console.log(`========================================================================================================================================`);
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
        addEmployee();
      }

      if (menu === 'Update Employee Role') {
        updateEmployee();
      }

      if (menu === 'End') {
        connect.end()
      }
    })
};

//-----View-----//
viewAllDepartments = () => {
  const sql = `SELECT department.name AS department FROM department`;


  connect.query(sql, (err, res) => {
    if (err) throw err;
    console.table(res);
    questions();
  });
};

viewAllRoles = () => {
  const sql = `SELECT roles.title AS title, roles.role_id AS id, department_id AS department, roles.salary AS salary FROM roles`;
  connect.query(sql, (err, res) => {
    if (err) throw err;
    console.table(res);
    questions();
  });
};

viewAllEmployees = () => {
  const sql = `SELECT employee.employee_id, 
  employee.first_name, 
  employee.last_name, 
  roles.title, 
  department.name AS department,
  roles.salary, 
  employee.manager_id AS manager
FROM employee
  LEFT JOIN roles ON employee.role_id = roles.role_id
  LEFT JOIN department ON roles.department_id = department.department_id
  LEFT JOIN employee manager ON employee.manager_id = employee.first_name`;

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
      message: "What is the name of the ne department?",
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
      message: "What is the name of the new role?",
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

        inquirer.prompt([
          {
            type: 'list',
            name: 'department',
            message: "What department is this role in?",
            choices: dept
          }
        ])
          .then(depAnswer => {
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

addEmployee = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: "What is epmloyee first name?",
    },
    {
      type: 'input',
      name: 'last_name',
      message: "What is employee last name?",
    },
  ])
    .then(answer => {
      const params = [answer.first_name, answer.last_name];
      // grab dept from department table
      const roleSql = `SELECT name , department_id FROM department`;

      connect.query(roleSql, (err, data) => {
        if (err) throw err;

        const dept = data.map(({ name, department_id }) => ({ name: name, value: department_id }));

        inquirer.prompt([
          {
            type: 'list',
            name: 'department',
            message: "What department is this employee in?",
            choices: dept
          }
        ])
          .then(depAnswer => {
            const dept = depAnswer.department;
            params.push(dept);
            // grab dept from department table
            const empManSql = `SELECT * FROM employee`;

            connect.query(empManSql, (err, data) => {
              if (err) throw err;

              const mana = data.map(({ manager_id, first_name, last_name }) => ({ name: first_name + "" + last_name, value: manager_id }));


              inquirer.prompt([
                {
                  type: 'list',
                  name: 'manager',
                  message: "What manager is this role under?",
                  choices: mana
                }
              ])
                .then(managerChoice => {
                  const manager = managerChoice.manager;
                  params.push(manager);
                  // console.log(params)

                  const empRoleSql = `SELECT role_id, title FROM roles`;


                  connect.query(empRoleSql, (err, data) => {
                    if (err) throw err;


                    const roles = data.map(({ role_id, title }) => ({ name: title, value: role_id, }));

                    // console.log(roles)
                    inquirer.prompt([

                      {
                        type: 'list',
                        name: 'role',
                        message: "What role is this employee filling?",
                        choices: roles
                      },
                    ])
                      .then(roleChoice => {
                        // console.log(roleChoice)
                        const role = roleChoice.role;
                        params.push(role);

                        const sql = `INSERT INTO employee (first_name, last_name, department_id, manager_id, role_id)
                      VALUES (?, ?, ?, ?, ?)`;

                        connect.query(sql, params, (err, result) => {
                          if (err) throw err;
                          console.log(`Added ${answer.first_name} to employees!`);

                          viewAllEmployees();
                        });
                      });
                  });
                });
            });
          });
      });
    });
};


updateEmployee = () => {

  const empManSql = `SELECT * FROM employee`;

  connect.query(empManSql, (err, data) => {
    if (err) throw err;

    const employees = data.map(({ employee_id, first_name, last_name}) => ({ name: first_name + "" + last_name, value: employee_id}));

    inquirer.prompt([
      {
        type: 'list',
        name: 'name',
        message: "What empoloyee do you want to change?",
        choices: employees
      }
    ])
      .then(empChoice => {
        const employee = empChoice.name;
        // console.log(employee)
        const params = [];
        // console.log(params)
        params.push(employee);
        // console.log(params)

        const empRoleSql = `SELECT role_id, title FROM roles`;


        connect.query(empRoleSql, (err, data) => {
          if (err) throw err;

          const roles = data.map(({ role_id, title }) => ({ name: title, value: role_id, }));

          // console.log(roles)
          inquirer.prompt([

            {
              type: 'list',
              name: 'role',
              message: "What role is this employee filling?",
              choices: roles
            },
          ])
            .then(roleChoice => {
              const role = roleChoice.role;
              params.push(role);
              // console.log(params)
              //change order of array//
              let test = params[0]
              params[0] = role
              params[1] = test 

              const sql = `UPDATE employee SET role_id = ? WHERE employee_id = ?`;

              connect.query(sql, params, (err, result) => {
                if (err) throw err;
                console.log(`changed ${empChoice.name}'s Role!`);

                viewAllEmployees();
              });
            });
        });
      });
  });
};
