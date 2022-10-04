INSERT INTO department (department_id, name)
VALUES (1, "Sales"),
       (2, "Engineering"),
       (3, "Finance"),
       (4, "Legal");

INSERT INTO roles (role_id, title, salary, department_id)
VALUES  (1, "Sales Lead", "100000",1),
        (2, "Saleperson", "80000",1),
        (3, "Lead Engineer", "150000",2),
        (4, "Software Engineer", "120000",2),
        (5, "Account Manager", "160000",3),
        (6, "Accountant", "125000",3),
        (7, "Legal Team Lead", "250000",4),
        (8, "Lawyer", "190000",4);

INSERT INTO employee (employee_id, first_name, last_name, department_id, manager_id, role_id)
VALUES  (1, "Devin", "Gough", 1, NULL,1),
        (2, "Gini", "Counts", 2, 1,1),
        (3, "Jasmine", "Ames", 3, NULL,2),
        (4, "Harlow", "Correa", 4, 3,2),
        (5, "Bean", "Fordshire", 5, NULL,3),
        (6, "Anaii", "Correa", 6, 5,3),
        (7, "Robbie", "Firmilan", 7, NULL,4),
        (8, "Jimmy", "Moore", 8, 7,4);
