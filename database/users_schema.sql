-- schema for users TABLE
-- as well as PROCEDURE to populate users table with test data

CREATE TABLE users 
	(
		_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
		first_name VARCHAR(30) NOT NULL,
		last_name VARCHAR(30) NOT NULL,
		street VARCHAR(100) NOT NULL,
		city VARCHAR(30) NOT NULL,
		state VARCHAR(30) NOT NULL,
		zip VARCHAR(10) NOT NULL,

		PRIMARY KEY(_id)
	);


DELIMITER $$  
DROP PROCEDURE insertUsers;
CREATE PROCEDURE insertUsers()

   BEGIN
      DECLARE a INT Default 1;
      usersLoop: LOOP         
         INSERT INTO users (first_name, last_name, street, city, state, zip)
	      VALUES (
	      	CONCAT('user', CAST(a AS CHAR(10))),
	      	CONCAT('lastName', CAST(a AS CHAR(10))),
	      	CONCAT('street', CAST(a AS CHAR(10))),
	      	CONCAT('city', CAST(a AS CHAR(10))),
	      	CONCAT('state', CAST(a AS CHAR(10))),
	      	CONCAT('zip', CAST(a AS CHAR(10)))
	      	);
         SET a=a+1;
         IF a=101 THEN
            LEAVE usersLoop;
         END IF;
   END LOOP usersLoop;
END $$

CALL insertUsers();
