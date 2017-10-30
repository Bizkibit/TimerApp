let time = require("../models/time")

exports.time_post = function(req, res, next) {
  let current_time = req.body.time;
  
  time.create({current_time: time})
  .then(time => res.redirect("/"))
  .catch(next)
}

exports.time_get = function(req, res) {
  res.render('index', {title: "Timer"});
}
