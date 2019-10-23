var express = require('express');
var router = express.Router();
const uuid = require('uuid');
const fs = require('fs');

var list = [
  {
    id: 1,
    title: "Joo",
    deadline: "21.11.2019",
    completed: true,
    priority: "high"
  },
  {
    id: 2,
    title: "Kaarlen Synttärit",
    deadline: "11.09.1995",
    completed: true,
    priority: "ultra high"
  },
  {
    id: 3,
    title: "Plebeiji",
    deadline: "1.11.2014",
    completed: false,
    priority: "low"
  },
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/list', function(req, res, next) {
  const newitem = {
    id: uuid(),
    title: req.body.title,
    deadline: req.body.time,
    completed: req.body.completed,
    priority: req.body.priority
  };

  list.push(newitem);
  console.log(list);

  const jsonList = JSON.stringify(list, null, 2);

  fs.writeFileSync(__dirname+'/../public/list.json', jsonList, function(err) {
    if (err) throw err;
  });

  res.status(201);
  res.json(list);
})

router.put('/api/list/:id', function(req, res, next) {
  const id = req.params.id;
  let item = list.filter(item => {
    return item.id == id;
  })[0];
  const index = list.indexOf(item);
  const keys = Object.keys(req.body);

  keys.forEach(key => {
    item[key] = req.body[key];
  });

  list[index] = item;

  res.status(200);
  res.json(list[index]);
});

module.exports = router;
