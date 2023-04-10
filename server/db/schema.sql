CREATE DATABASE for_sale_by_owner;
USE for_sale_by_owner;

CREATE TABLE user_info (
    id INT NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    password VARCHAR(20),
    relator BOOLEAN NOT NULL
)


CREATE TABLE house_listing (
    id INT NOT NULL,
    name VARCHAR(200) NOT NULL,
    location VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    negotiate BOOLEAN NOT NULL,
    description VARCHAR(1000) NOT NULL,
    problems VARCHAR(1000) NOT NULL,
    perks VARCHAR(1000) NOT NULL,
    
    pictures foreign_key, 
    
)
