-- Active: 1708794891211@@127.0.0.1@3306@Assignment
CREATE DATABASE Assignment;
USE Assignment;
CREATE table Department(
    S_no INT(5),
    Dept_name CHAR(20),
    Dept_id INT(10) PRIMARY KEY
);
INSERT INTO Department VALUES
    (1, 'Electricity', 1001),
    (2, 'Plumber', 1002),
    (3, 'Carpenter', 1003);
CREATE table Employee(
    Worker_id INT(5) PRIMARY KEY,
    Worker_name CHAR(15),
    Dept_id INT(10),
    FOREIGN KEY (Dept_id) REFERENCES department(Dept_id)
);
INSERT INTO Employee VALUES
(1, 'John Doe', 1001),
(2, 'Jane Smith', 1002),
(3, 'Alice Johnson', 1003);
CREATE TABLE Tools(
    Worker_id INT(5),
    Tools_id INT(10) PRIMARY KEY,
    Tool_name CHAR(20),
    Dept_id INT(10),
    FOREIGN KEY (Dept_id) REFERENCES department(Dept_id) 
);
INSERT INTO Tools (Worker_id, Tools_id, Tool_name, Dept_id) VALUES
(1, 2001, 'Hammer', 1001),
(2, 2002, 'Screwdriver', 1002),
(3, 2003, 'Wrench', 1003);

CREATE TABLE Allotment(
    Allot_id INT(10) PRIMARY KEY,
    Tools_id INT(10),
    Worker_id INT(5),
    Dept_id INT(10),
    Date_allot DATE,
    FOREIGN KEY (Tools_id) REFERENCES tools(Tools_id), 
    FOREIGN KEY (Worker_id) REFERENCES employee(Worker_id), 
    FOREIGN KEY (Dept_id) REFERENCES department(Dept_id)
);

INSERT INTO allotment (Allot_id, Tools_id, Worker_id, Dept_id, Date_allot)
VALUES 
(1, 2001, 1, 1001, '2024-03-08'),
(2, 2002, 2, 1002, '2024-03-08'),
(3, 2003, 3, 1003, '2024-03-08');


SELECT Employee.Worker_name AS W_name, Department.Dept_name AS D_name, Allotment.Allot_id AS A_id, 
Tools.Tool_name AS T_name, COUNT(Allotment.Tools_id) AS Quantity
FROM allotment
JOIN 
    Employee ON Allotment.Worker_id = Employee.Worker_id
JOIN 
    Department ON Allotment.Dept_id = Department.Dept_id
JOIN 
    Tools ON Allotment.Tools_id = Tools.Tools_id
GROUP BY 
    Employee.Worker_name, Department.Dept_name,Allotment.Allot_id, Tools.Tool_name;

select * from tools;
select * from allotment;

drop table allotment;
drop table tools;
drop table employee;
drop table Department;

