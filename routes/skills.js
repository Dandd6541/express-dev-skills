

var express = require('express');
var router = express.Router();
// Require our  controller module
const skillsCtrl = require('../controllers/skills');

// All routes will start with '/skills'

// GET /skills (index functionality - list all)
router.get('/', skillsCtrl.index);

router.get('/new', skillsCtrl.new);

// GET /skills/:id (show functionality - show one skill)
router.get('/:id', skillsCtrl.show);
router.get('/:somethingcrazy/edit', skillsCtrl.edit);
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);
router.put('/:id', skillsCtrl.update);
module.exports = router;


