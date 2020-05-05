var express = require('express');
var router = express.Router();
const { getAllAttractions, getAttractivePlacesByReviews, createAttractions } = require('../controllers/attractive_places');

router.get('/attractions', getAllAttractions)
router.get('/attractions/:reviews', getAttractivePlacesByReviews);
router.post('/attractions', createAttractions);

module.exports = router;
