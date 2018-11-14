var express = require('express')

var router = express.Router()
var notefrais = require('./api/notes.route')
var auth = require('../controllers/profile.controller')

router.use('/notes', notefrais);

module.exports = router;