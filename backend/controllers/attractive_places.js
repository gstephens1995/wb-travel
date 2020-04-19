const attractions = require('../mock_attractions.json');

const getAttractivePlaces = (req, res, next) => {
    let lat = req.query.lat;
    let lng = req.query.lng;

    res.status(200).json(attractions);
}

module.exports = {
    getAttractivePlaces: getAttractivePlaces
}