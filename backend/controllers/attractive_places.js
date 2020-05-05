
var AttractionModel = require('../models/attraction');

const getAttractivePlacesByReviews = (req, res, next) => {
    let reviewsNum = parseInt(req.params.reviews) || 0;
    AttractionModel.find({}).where("reviews").gt(reviewsNum).exec((err, result) => {
        console.log(result);
        res.status(200).json(result);
    })
}

const createAttractions = (req, res, next) => {
    let attractions_array = req.body;
    for(let attraction of attractions_array) {
        let attractionObj = new AttractionModel(attraction);
        attractionObj.save();
    }
    res.status(201).json({"status": "Created"});
}

const getAllAttractions = (req, res, next) => {
    AttractionModel.find({}, (err, result) => {
        res.status(200).json(result);
    });
}

module.exports = {
    getAttractivePlacesByReviews: getAttractivePlacesByReviews,
    createAttractions: createAttractions,
    getAllAttractions: getAllAttractions
}