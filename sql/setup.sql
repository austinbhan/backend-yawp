-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS restaurants;

CREATE TABLE users (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email TEXT NOT NULL,
    password_hash TEXT NOT NULL
);

CREATE TABLE restaurants (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    description VARCHAR NOT NULL
);


INSERT INTO restaurants (name, description) VALUES
    ('Bojangles', 'Fresh Biscuits'),
    ('Sonic', 'Roller skating barhops'),
    ('Zaxbys', 'Nuclear Fried Chicken'),
    ('Popeyes', 'Cajun Chicken'),
    ('Chik Fil-A', 'Eet Mor Chikin'),
    ('Raising Canes', 'Chicken Fingers');