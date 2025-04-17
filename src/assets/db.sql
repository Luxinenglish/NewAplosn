-- Création de la base de données
CREATE DATABASE IF NOT EXISTS my_database;

-- Utilisation de la base de données
USE my_database;

CREATE TABLE IF NOT EXISTS users (
                                     id INT AUTO_INCREMENT PRIMARY KEY,
                                     username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    profile_picture CHAR(36) DEFAULT NULL,
    possessed_product CHAR(36) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

-- Création de la table 'products'
CREATE TABLE IF NOT EXISTS products (
                                        id INT AUTO_INCREMENT PRIMARY KEY,
                                        name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );