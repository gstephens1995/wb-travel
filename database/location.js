var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function createAcct(userName, email, password) {
    MongoClient.connect(url, function (err, db) {
        if (err) {
            throw err;
        }

        var dbo = db.db("data");

        dbo.createCollection("locations", function (err, res) {
            if (err) {
                throw err;
            }
            db.close();
        });
    });
}