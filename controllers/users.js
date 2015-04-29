/**
* /users/ endpoints
*/

//import models
var User = require('../models/User.js');

//get db connection
var db = require('../database/database.js');
var connection = db.getConnection();

//GET /users/
//returns all user records
exports.getUsers = function(req, res){
   	
	//initialize return object
	var data = {
        "users":"",
    };
    
	//query for user records 
    connection.query("SELECT * FROM users",[id],function(err, userResults, fields){
        if(!!err){
        	//handle error
        	res.status(500); //internal server error
        	data["error"] = 1;
            data["message"] = "Error getting user data";
        }else{
        	//return data successfully
        	res.status(200);
            data["user"] = userResults;
        }
        res.json(data);
    });
};

//PUT /users
//updates user record
exports.updateUser = function(req, res){

	var user = User.createFromRequest(req);

	if(!user.id){
		res.status(400);
		var message = {
			"message" : "must have an id to update a user"
		};
	}
   	
	//initialize return object
	var data = {
        "user":"",
    };
    
	//query for user records 
    connection.query("UPDATE users SET first_name = ?, last_name = ?, street = ?, city = ?, state = ?, zip = ? WHERE _id = ?",[user.firstName, user.lastName, user.street, user.city, user.state, user.zip, user.id],function(err, userResults, fields){
        if(!!err){
        	//handle error
        	res.status(500); //internal server error
        	data["error"] = 1;
            data["message"] = "Error updating user data";
        }else{
        	//return data successfully
        	res.status(200);
            data["user"] = user;
        }
        res.json(data);
    });
};





