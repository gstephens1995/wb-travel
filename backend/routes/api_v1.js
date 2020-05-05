var express = require('express');
var router = express.Router();
const { getAllAttractions, getAttractivePlacesByReviews, createAttractions, getClosestAttractions } = require('../controllers/attractive_places');

router.get('/attractions', getAllAttractions);
router.get('/attractions/:lat/:lng/:miles', getClosestAttractions);
router.get('/attractions/:reviews', getAttractivePlacesByReviews);
router.post('/attractions', createAttractions);

module.exports = router;
