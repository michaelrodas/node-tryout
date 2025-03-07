const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ingredients manager' });
});

/* Example returning a json */
// router.get("/", (req, res) => {
//   res.json({ message: "Welcome to crud test application." });
// });

module.exports = router;
