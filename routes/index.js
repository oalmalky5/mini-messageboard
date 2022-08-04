var express = require('express');
const app = require('../app');
var router = express.Router();
const PORT = process.env.PORT || 5000


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

router.get('/new', (req, res, next) => {
  res.render('form', {title: 'Form submission'})
})

router.post('/new', (req, res, next) => {
  messages.push({text: req.body.messageText, user: req.body.messageUser, added: new Date()})
  res.redirect('/')
})

app.listen(PORT)
module.exports = router;
