var express = require('express');
var router = express.Router();
const { getAttractivePlaces } = require('../controllers/attractive_places');

/* GET home page. */
router.get('/attractions/:lat/:lng', getAttractivePlaces);

module.exports = router;
