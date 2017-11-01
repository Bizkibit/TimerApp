var express = require('express');
var router = express.Router();

let {time_get, time_post, scoreGet} = require("../controller/timerController")

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log("inside post router");
  next();
}, time_post);

router.get('/', function(req, res, next)  {
  console.log("inside get router");
  next();
},
time_get);

router.get('/scoreGet', scoreGet)


module.exports = router;
