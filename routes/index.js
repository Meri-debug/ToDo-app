var express = require('express');
var router = express.Router();

const list = [
  {
    id: 1,
    title: 'Splägä',
    radio: 'done'
  },
  {
    id: 2,
    title: 'Test data number two',
    radio: 'done'
  },
  {
    id: 3,
    title: 'Go to the market',
    radio: 'done'
  },
  {
    id: 4,
    title: 'Buy some green bois',
    radio: 'done'
  },
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
