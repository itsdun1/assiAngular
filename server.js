var express = require("express");
var app = express()
const path = require("path")

app.use(express.static(`${__dirname}/front-end/dist/`));

app.listen(process.env.PORT || 8080)

app.get( '/*', (req,res)=>{
  res.sendFile(`./front-end/dist/index.html`)
})

// path.join(`./front-end/dist/index.html`)
