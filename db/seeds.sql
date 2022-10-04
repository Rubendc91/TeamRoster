INSERT INTO department ( name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES  ("Sales Lead", "100000",1),
        ("Saleperson", "80000",1),
        ("Lead Engineer", "150000",2),
        ("Software Engineer", "120000",2),
        ("Account Manager", "160000",3),
        ("Accountant", "125000",3),
        ("Legal Team Lead", "250000",4),
        ("Lawyer", "190000",4);

INSERT INTO employee (first_name, last_name, department_id, manager_id, role_id)
VALUES  ("Devin", "Gough", 1, NULL,1),
        ("Gini", "Counts", 2, 1,1),
        ("Jasmine", "Ames", 3, NULL,2),
        ("Harlow", "Correa", 4, 3,2),
        ("Bean", "Fordshire", 5, NULL,3),
        ("Anaii", "Correa", 6, 5,3),
        ("Robbie", "Firmilan", 7, NULL,4),
        ("Jimmy", "Moore", 8, 7,4);
