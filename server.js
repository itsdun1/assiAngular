var express = require("express");
var app = express()
const path = require("path")

app.use(express.static(__dirname + '/dist/assiapp'));

app.listen(process.env.PORT || 8080)

app.get( '/*', (req,res)=>{
  res.sendFile(path.join(__dirname + '/dist/assiapp/index.html'))
})

// path.join(`./front-end/dist/index.html`)
