var express = require('express');
var router = express.Router();

router.post('/api/list', function(req, res, next) {
  res.send('OK')
})

module.exports = router;
