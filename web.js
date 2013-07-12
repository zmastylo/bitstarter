var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var fs = require('fs');
    try {
      /// read index.html and send in response
      var indexFileContent = fs.readFileSync("index.html");
      response.send(indexFileContent);
    }
    catch(e) {
      console.log("Error reading index.html");
    }
  } 
});
