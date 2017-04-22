var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var Pusher = require('pusher')
//app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const pusher = new Pusher({
  appId: 'XXX_PUSHER_ID',
  key: 'XXX_PUSHER_KEY',
  secret: 'XXX_PUSHER_SECRET',
  encrypted: true
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/', function (req, res) {
    pusher.trigger("pubchat", "message_sent", { message : req.body.message, name : "Anonymous" });
    res.send({
        message:'message_sent'
    });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
