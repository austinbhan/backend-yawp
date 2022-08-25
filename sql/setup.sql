-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS restaurants CASCADE;
DROP TABLE IF EXISTS restaurant_reviews CASCADE;

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

CREATE TABLE restaurant_reviews (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    stars BIGINT,
    details VARCHAR,
    user_id BIGINT,
    restaurant_id BIGINT, 
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);

INSERT INTO restaurant_reviews (user_id, restaurant_id, stars, details) VALUES
    (1, 1, 5, 'I like chicken'),
    (1, 2, 4, 'I like chicken too'),
    (1, 3, 3, 'I like chicken three'),
    (2, 4, 2, 'I like chicken four'),
    (3, 5, 1, 'I like chicken five'),
    (3, 6, 5, 'I dont like chicken');    