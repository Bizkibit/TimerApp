var express = require('express');
var router = express.Router();

let timer = require("../controller/timerController")

/* GET home page. */
router.get('/', timer.time_get);

router.post('/', function(req, res) {
  console.log("wtf")
}, timer.time_post);

module.exports = router;
