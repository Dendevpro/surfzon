DROP DATABASE IF EXISTS surfzon_db;

CREATE DATABASE surfzon_db;

USE surfzon_db;

CREATE TABLE products (
    product_id VARCHAR(45) NOT NULL,
    product_name VARCHAR(45) NOT NULL,
    department VARCHAR(45) NOT NULL,
    price DECIMAL(3,2) NOT NULL,
    quantity INT NULL,
    PRIMARY KEY (quantity)
);

INSERT INTO products (product_id, product_name, department, price, quantity)
VALUES ("WS001", "Wetsuit", "Gear", 125, 12);