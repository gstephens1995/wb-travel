var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/accountdb";

function createAcct(userName, email, password) {
    MongoClient.connect(url, function (err, db) {
        if (err) {
            throw err;
        }
        console.log("accountdb created!");

        var dbo = db.db("data");

        dbo.createCollection("userInfo", function (err, res) {
            if (err) {
                throw err;
            }
            db.close();
        });


        var account = {
            userName: userName,
            password: password,
            email: email,
            fName: '',
            lName: '',
            reviews: [],
            created_lists: [],
        };


        dbo.collection("userInfo").insertOne(account, function (err, res) {
            if (err) {
                throw err;
            }
            db.close();
        });
    });
}

function confirmAcct(enteredInfo, password) {
    MongoClient.connect(url, function (err, db) {
        if (err) {
            throw err;
        }

        var dbo = db.db("data");

        dbo.createCollection("userInfo", function (err, res) {
            if (err) {
                throw err;
            }
            db.close();
        });
        var acctInfo = {
            userName: enteredInfo,
            password: password
        };

        dbo.collection("userInfo").find(acctInfo).toArray(function (err, result) {
            if (err) throw err;
            if (result) {
                return true;
            }
            db.close();
        });
    });
}