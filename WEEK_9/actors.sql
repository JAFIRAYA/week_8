create table actors(first_name char(30),last_name char(30),number_oscars int,birthday date);
insert into actors (first_name,last_name,number_oscars,birthday) values('aya1','jafir',3,'2004-11-12');
insert into actors (first_name,last_name,number_oscars,birthday) values('name2','last2',9,'2010-10-12');
insert into actors (first_name,last_name,number_oscars,birthday) values('name3','last3',6,'2000-11-19');
SELECT * FROM actors ;

SELECT avg(number_oscars) AS average_number_oscars FROM actors;
SELECT * FROM actors WHERE number_oscars=3;
select * from actors where birthday>'01/01/1970';
select * from actors where first_name='aya' or first_name='name2';
UPDATE actors SET first_name='name1' WHERE first_name='aya1' AND last_name='jafir';
UPDATE actors SET number_oscars=9 WHERE first_name='name3' RETURNING first_name,last_name,number_oscars,birthday;
ALTER TABLE actors RENAME COLUMN birthday TO age;
delete from actors where first_name='name1'returning first_name;
CREATE TABLE movies(
movie_name SERIAL,
movie_title VARCHAR (50) NOT NULL,
movie_story TEXT,
movies_oscars INTEGER,
PRIMARY KEY (movie_id),
FOREIGN KEY (movies_oscars) REFERENCES actors (number_oscars)
);

