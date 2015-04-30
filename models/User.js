/**
* Model for User
*/

function User() {
    this.id;
	this.firstName;
	this.lastName;
	this.street;
	this.city;
	this.state;
	this.zip;
}

/**
* creates user object from body of request object
*/
User.prototype.createFromRequest = function(req){
	var user = new User();
	user.id = req.body.id;
	user.firstName = req.body.firstName;
	user.lastName = req.body.lastName;
	user.street = req.body.street;
	user.city = req.body.city;
	user.state = req.body.state;
	user.zip = req.body.zip;
	return user;
}



module.exports = User;