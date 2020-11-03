var express = require('express');
var router = express.Router();


const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date()
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  const newURL = 'http://' + req.headers.host + '/new';
  res.render('index', { title: 'Mini Messageboard', messages: messages, newURL: {url: newURL} });
});

// GET new message form page
router.get('/new', function(req, res, next) {
  res.render('form', {})
})

// POST new message from form page
router.post('/new', function(req, res, next) {
  const { name, message, } = req.body;
  messages.push({text: message, user: name, added: new Date()});
  res.redirect('/');
})

module.exports = router;
