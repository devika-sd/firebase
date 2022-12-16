var firebase = require('../controller/firebase');
var express = require('express');
var router = express.Router();

router.route('/getall')
.get(firebase.getallrecord);

router.route('/postone')
.post(firebase.setonerecord);

router.route('/onerecord/:id')
.get(firebase.getonerecord)
.post(firebase.updateone)
.delete(firebase.deleteone)

module.exports = router;