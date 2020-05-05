const User = require('../../models/User');
const UserSession = require('../../models/UserSession');
module.exports = function (app) {
    //Sign up
    app.post('/api/account/signup', function (req, res, next) {
        const { body } = req;
        const { first_name,
            last_name,
            password
        } = body;

        let {
            email
        } = body;

        if (!first_name) {
            return res.end({
                success: false,
                message: 'Error: First name cannot be blank.'
            })
        }
        if (!last_name) {
            return res.end({
                success: false,
                message: 'Error: Last name cannot be blank.'
            })
        }
        if (!email) {
            return res.end({
                success: false,
                message: 'Error: Email cannot be blank.'
            })
        }
        if (!password) {
            return res.end({
                success: false,
                message: 'Error: Password cannot be blank.'
            })
        }

        email = email.toLowerCase();

        //Verify email doesnt exsist
        //save
        User.find({
            email: email
        }, function (err, previousUsers){
            if (err) {
                return res.end({
                    success: false,
                    message: 'Error: Server error'
                });
            } else if (previousUsers.length > 0) {
                return res.end({
                    success: false,
                    message: 'Error: Account already exists'
                });
            }


            const newUser = new User();

            newUser.email = email;
            newUser.first_name = first_name;
            newUser.last_name = last_name;
            newUser.password = newUser.generateHash(password);
            newUser.save(function (err, user) {
                if (err) {
                    return res.end({
                        success: false,
                        message: 'Error: Server error'
                    });
                }
                return res.end({
                    success: true,
                    message: 'Signed up'
                });
            })
        })
    });

    app.post('/api/account/signin', function (req, res, next) {
        const { body } = req;
        const {
            password
        } = body;
        let {
            email
        } = body;

        if (!email) {
            return res.end({
                success: false,
                message: 'Error: Email cannot be blank.'
            })
        }
        if (!password) {
            return res.end({
                success: false,
                message: 'Error: Password cannot be blank.'
            })
        }

        email = email.toLowerCase();

        User.find({
            email: email
        },function (err, users) {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: server error'
                });
            }

            if (users.length != 1) {
                return res.send({
                    success: false,
                    message: 'Error: Invalid'
                });
            }

            const user = users[0];
            if (!user.validPassword(password)) {
                return res.send({
                    success: false,
                    message: 'Error: Invalid'
                });
            }

            //create user session
            const userSession = new UserSession();
            userSession.userId = user._id;
            userSession.save(function (err, doc) {
                if (err) {
                    return res.send({
                        success: false,
                        message: 'Error: server error'
                    });
                }

                return res.send({
                    success: true,
                    nessage: 'Valid sign in',
                    token: doc._id
                });
            });
        })
    });

    app.get('/api/account/verify', function (req, res, next) {
        //get token
        const { query } = req;
        const { token } = query;

        //verify uniqueness
        UserSession.find({
            _id: token,
            isDeleted: false
        }, function (err, sessions) {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            }

            if (sessions.length != 1) {
                return res.send({
                    success: false,
                    message: 'Error: Invalid'
                });
            } else {
                return res.send({
                    success: true,
                    message: 'Good'
                });
            }
        });
    });

    app.get('/api/account/logout', function (req, res, next) {
        //get token
        const { query } = req;
        const { token } = query;

        //verify uniqueness
        UserSession.findOneAndUpdate({
            _id: token,
            isDeleted: false
        },
            { $set: { 
                isDeleted: true } }
            , null,function (err, sessions) {
                if (err) {
                    return res.send({
                        success: false,
                        message: 'Error: Server error'
                    });
                }

                return res.send({
                    success: true,
                    message: 'Good'
                });

            });
    });
};