
var AttractionModel = require('../models/attraction');

const getAttractivePlaces = (req, res, next) => {
    let lat = req.query.lat;
    let lng = req.query.lng;

    res.status(200).json({"status": "OK"});
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
    const attractions = AttractionModel.find({}, (err, result) => {
        res.status(200).json(result);
    });
}

module.exports = {
    getAttractivePlaces: getAttractivePlaces,
    createAttractions: createAttractions,
    getAllAttractions: getAllAttractions
}