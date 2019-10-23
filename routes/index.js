var express = require('express');
var router = express.Router();
var fs = require('fs');

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
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
// Get pyyntö, joka hakee listan
router.get('/api/list', (req, res) => {
  try {
    var updateList = fs.readFileSync(__dirname + '/../public/list.json');
    list = JSON.parse(updateList);
  } catch (error) {
    list = [];
    res.send('Could not find any entries on initial load')
  }
  res.send(list);
  res.status(200).send();
})


router.get('/api/list/:id', (req, res) => {
  const itemFound = list.some(listItem => listItem.id === parseInt(req.params.id));

  if (itemFound) {
    res.json(list.filter(listItem => listItem.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No list item with the id of ${req.params.id}` });
  }
});

router.delete('/api/list/:id', (req, res) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id == req.params.id) {
      list.splice(i, 1);
      res.json({ msg: "deleted: " + req.params.id })
      saveToList();
      return;
    }
  }
  res.json({ msg: "Could not find " });
})
function saveToList() {
  fs.writeFileSync(__dirname+'/../public/list.json', JSON.stringify(list, null, 2), () => {
    console.log("list saved")
    console.log(list)
  })
}


module.exports = router;
