var express = require('express')
var path = require('path')

var app = express()
var port = 8080

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'))
})

app.listen(port, function () {
  console.log('Running on port ' + port)
})
