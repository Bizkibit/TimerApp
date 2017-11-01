let {Time} = require("../models")

// exports.time_post = function(req, res, next) {
//   let current_time = req.body.current_time;
//   console.log(current_time);
//
//   time.create({current_time})
//   .then(current_time => res.status(201).send(current_time))
//   .then(res => res.redirect("/"))
//   .catch(next)
// }
//
// exports.time_get = function(req, res) {
//   res.render('index', {title: "Timer"});
// }

module.exports = {
   time_post (req, res, next)  {
    console.log("inside time post")
    let {current_time} = req.body;
    current_time = parseInt(current_time);

    return Time.create({current_time})
    .then(current_time => res.status(201).redirect("/"))
    // .catch(error => res.status(400).send(error));
      // .then(current_time => res.status(201).send(current_time))
    // .then(res => res.redirect("/"))
    // .catch(error => res.status(400).send(error));
  },

  time_get (req, res, next) {
    console.log("inside time_get");
    res.render('index', {title: "Timer"});
  },

  async scoreGet (req, res, next) {
    console.log('inside scoreGet');
    try {
      let topScores = await Time.findAll({order: [['current_time', 'DESC']], limit: 3});
      res.json(topScores);
    } catch (e) {
      res.json(e)
    }
  }
}
