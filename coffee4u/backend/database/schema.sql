 CREATE TABLE coffees (
    ->     id INT NOT NULL AUTO_INCREMENT,
    ->     name VARCHAR(45) NOT NULL,
    ->     volume VARCHAR(100) NOT NULL,
    ->     stars INT NOT NULL, 
    ->     description VARCHAR(300) NOT NULL,
    ->     price INT NOT NULL,
    ->     PRIMARY KEY (id)
    -> );

CREATE TABLE users (
    ->     id INT NOT NULL AUTO_INCREMENT,
    ->     username VARCHAR(50) NOT NULL,
    ->     email VARCHAR(100) NOT NULL,
    ->     password VARCHAR(255) NOT NULL,
    ->     PRIMARY KEY (id),
    ->     UNIQUE KEY unique_email (email)
    -> );