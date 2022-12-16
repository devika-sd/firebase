var firebaseController = require('./firebase');

module.exports=(app)=>{
    app.use('/firebase',firebaseController);
}