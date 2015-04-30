var express = require('express');
var router = express.Router();
var users = require('./controllers/users.js');
 
/** index route */
router.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html'); 
});

/** /users/ routes */
router.get('/users', users.getUsers);
router.put('/users', users.updateUser);
  
module.exports = router;