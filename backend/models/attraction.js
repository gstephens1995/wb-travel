var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AttractionSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    lat: {
        type: String,
        required: true,
        trim: true
    },
    lng: {
        type: String,
        required: true,
        trim: true
    },
    reviews: {
        type: Number,
        default: 0,
        validate(value) { 
            if (value < 0) throw new Error("Reviews cannot have a negative number");
        }
    }
});

const Attraction = mongoose.Model("Attraction", AttractionSchema);
module.exports = Attraction;