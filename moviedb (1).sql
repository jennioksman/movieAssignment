-- Active: 1730205353943@@127.0.0.1@5432@moviedb@public
CREATE SCHEMA moviedb;

-- Active: 1730205353943@@127.0.0.1@5432@movie_servise@public
CREATE SCHEMA ;

-- Active: 1730205353943@@127.0.0.1@5432
CREATE DATABASE movie_servise

CREATE Table movie(
    id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255),
    year INT,
    genre VARCHAR(255),
    FOREIGN KEY (genre) REFERENCES genre(name)
);

CREATE Table review(
    id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    movie INT,
    users INT,
    stars INT,
    review_text VARCHAR(255),
    FOREIGN KEY (movie) REFERENCES movie(id),
    FOREIGN KEY (users) REFERENCES users(id)
);

CREATE Table genre(
   name VARCHAR(255)
);

ALTER TABLE genre
ADD PRIMARY KEY (name);

CREATE Table users(
    id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255),
    username VARCHAR(255),
    password VARCHAR(255),
    year_of_birth INT
);

CREATE Table favourite_movie(
    movie INT,
    users INT,
    PRIMARY KEY (movie, users),
    FOREIGN KEY (movie) REFERENCES movie(id),
    FOREIGN KEY (users) REFERENCES users(id)
)

INSERT INTO genre (name) VALUES 
    ('drama'),('comedy'),('scifi'),('fantasy'),('action'),('triller');

INSERT INTO movie (name, year, genre) VALUES 
    ('Inception', 2010, 'action'),
    ('The Terminator', 1984, 'action'),
    ('Tropic Thunder', 2008, 'comedy'),
    ('Borat', 2006, 'comedy'),
    ('Interstellar', 2014, 'drama'),
    ('Joker', 2019, 'drama');

INSERT INTO users (username, name, password, year_of_birth) VALUES
    ('reimarii', 'Reima Riihimäki', 'qwerty123', 1986),
    ('lizzy', 'Lisa Simpson', 'abcdef', 1991 ),
    ('boss', 'Ben Bossy', 'salasana', 1981 )

