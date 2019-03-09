DROP DATABASE IF EXISTS surfzon_db;

CREATE DATABASE surfzon_db;

USE surfzon_db;

CREATE TABLE products (
    item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(45) NOT NULL,
    department VARCHAR(30) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    quantity INT(11) NOT NULL,
    PRIMARY KEY (item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department, price, quantity)
VALUES ("Mayhen Tube Pig", "Surfboard", 450, 20),
       ("Mayhen Indo Driver", "Surfboard", 450, 20),
       ("Naish Hokua", "Surfboard", 1500, 10),
       ("Matuse Scipio", "Wetsuit", 125, 12),
       ("Oakley Latch Alpha", "Sunglasses", 200, 10),
       ("Rinse Kit", "Gear", 75.50, 10),
       ("FCS 6' Freedom Leash", "Gear", 32.99, 20),
       ("JJF Futures Fins", "Gear", 85, 10),
       ("Carver Knox Surfskate", "Skateboards", 180, 10),
       ("Sex Wax", "Miscelaneous", 0.79, 30);

