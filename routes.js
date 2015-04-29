var express = require('express');
var router = express.Router();
var users = require('./controllers/users.js');
 
router.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html'); 
});

router.get('/users', users.getUsers);
router.put('/users', users.updateUser);
  
module.exports = router;