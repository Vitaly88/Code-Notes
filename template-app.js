const bodyParser = require("body-parser");
const express = require("express");

const app = express();

app.get("/", function(req, res){
  res.send();
});

app.listen(3000, function(){
  console.log("Server has started on port 3000");
});
