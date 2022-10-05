DROP DATABASE IF EXISTS team_db;
CREATE DATABASE team_db;

USE team_db;

CREATE TABLE department (
  department_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
  role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL

);

CREATE TABLE employee (
  employee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  department_id INT NOT NULL,
  manager_id INT,
  role_id INT NOT NULL

);
