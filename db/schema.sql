### Schema

CREATE DATABASE burgerseq_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(50) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date datetime NOT NULL DEFAULT NOW(),
	PRIMARY KEY (id)
);
