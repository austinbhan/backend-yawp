-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS restaurants;
DROP TABLE IF EXISTS reviews;

CREATE TABLE users (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email TEXT NOT NULL,
    password_hash TEXT 
);

CREATE TABLE restaurants (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    description VARCHAR NOT NULL
);

CREATE TABLE reviews (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id BIGINT,
    restaurant_id BIGINT,
    stars BIGINT,
    detail VARCHAR
);

INSERT INTO users (email) VALUES
    ('biggus@dikkus.com'),
    ('naughtius@maximus.com'),
    ('incontinentia@buttucs.com');

INSERT INTO restaurants (name, description) VALUES
    ('Bojangles', 'Fresh Biscuits'),
    ('Sonic', 'Roller skating barhops'),
    ('Zaxbys', 'Nuclear Fried Chicken'),
    ('Popeyes', 'Cajun Chicken'),
    ('Chik Fil-A', 'Eet Mor Chikin'),
    ('Raising Canes', 'Chicken Fingers');

INSERT INTO reviews (user_id, restaurant_id, stars, detail) VALUES
    ('1', '1', '5', 'Dillon! You sonuva bitch!'),
    ('1', '2', '4', 'Its not a tumor!'),
    ('1', '3', '3', 'Ill Be Back'),
    ('2', '4', '2', 'Come with me if you want to live'),
    ('3', '5', '1', 'Give these people air!'),
    ('3', '6', '5', 'I lied');    