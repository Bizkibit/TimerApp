var express = require('express');
var router = express.Router();

let {time_get, time_post} = require("../controller/timerController")

/* GET home page. */
router.get('/', function(req, res, next)  {
  console.log("but why?");
  next();
},
time_get);

router.post('/', function(req, res) {
  console.log("wtf")
}, time_post);

module.exports = router;
