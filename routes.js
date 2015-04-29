var express = require('express');
var router = express.Router();
var users = require('./controllers/users.js');
 
 //temporary index
router.get('/', function(req, res){
    res.send('welcome to Distelli Demo'); 
});

router.get('/users', users.getUsers);
router.put('/users', users.updateUser);
  
module.exports = router;