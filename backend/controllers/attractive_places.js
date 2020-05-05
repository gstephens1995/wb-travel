
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

const getClosestAttractions = (req, res, next) => {
    let lat2 = parseFloat(req.params.lat);
    let lng2 = parseFloat(req.params.lng);
    let miles = parseFloat(req.params.miles);
    AttractionModel.find({}, (err, result) => {
        let closest_places = result.filter( x => {
            return getMiles( parseFloat(x.lat), parseFloat(x.lng), lat2, lng2 ) < miles
        });
        console.log(closest_places);
        res.status(200).json({"closest_places": closest_places});
    })
}

const getMiles = (lat1, lng1, lat2, lng2) => {
    let R = 6371;
    let diffLat = (lat2 - lat1) * (Math.PI / 180);
    let diffLng = (lng2 - lng1) * (Math.PI / 180);
    let lat1Rad = lat1 * (Math.PI / 180);
    let lat2Rad = lat2 * (Math.PI / 180);
    let a = Math.sin(diffLat/2) * Math.sin(diffLat/2) + Math.sin(diffLng/2) * Math.sin(diffLng/2) * Math.cos(lat1Rad) * Math.cos(lat2Rad);
    let d = R * 2 * Math.atan(Math.sqrt(a), Math.sqrt(1-a));
    return d * 0.621371; //in miles
}

module.exports = {
    getAttractivePlacesByReviews: getAttractivePlacesByReviews,
    createAttractions: createAttractions,
    getAllAttractions: getAllAttractions,
    getClosestAttractions: getClosestAttractions
}