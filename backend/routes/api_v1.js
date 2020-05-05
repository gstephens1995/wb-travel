var express = require('express');
var router = express.Router();
const { getAllAttractions, getAttractivePlaces, createAttractions } = require('../controllers/attractive_places');

router.get('/attractions', getAllAttractions)
router.get('/attractions/:lat/:lng', getAttractivePlaces);
router.post('/attractions', createAttractions);

module.exports = router;
