var express = require('express')
var path = require('path')

var app = express()
var port = 8080

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/jspdf', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/jspdf.html'))
})

app.get('/html2pdf', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/html2pdf.html'))
})

app.listen(port, function () {
  console.log('Running on port ' + port)
})
