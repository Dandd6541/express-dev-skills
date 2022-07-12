// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;

var express = require('express');
var router = express.Router();
// Require our todos controller module
const skillsCtrl = require('../controllers/skills');

// All routes will start with '/todos'

// GET /todos (index functionality - list all)
router.get('/', skillsCtrl.index);
// GET /todos/:id (show functionality - show one todo)
router.get('/:id', skillsCtrl.show);


module.exports = router;
