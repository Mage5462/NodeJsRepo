var express = require('express')

var app=express()

app.get("/",function(request,response){
  response.send("Hello world from node-express application");
})


app.listen(8283,function(err){
  if (err) throw err
  console.log("Server is running on port 8283")
})
