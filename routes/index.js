const express = require('express');
const router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get("/", (req, res) => {
  res.json({ message: "Welcome to crud test application." });
});

// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('../swagger');

// router.use('/api-docs', swaggerUi.serve);
// router.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = router;
