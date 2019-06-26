const tracer = require('dd-trace').init({
  service:'node-app-logs',
  env:`node-logs`,
  //debug:true, 
  logInjection: true, 
  hostname: 'localhost', 
  port: 8126,
  analytics: true
  });
var logger = require("./logger");
var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.status(200)
  res.send('Hello World!');
  logger.log('info', 'A request was received for endpoint /');
});

app.get('/test', function (req, res) {
    //const span = tracer.startSpan('custom.function');
    //span.setTag('custom');
    one();
    //span.finish()
    res.status(400)
    res.send('This is a second endpoint for test');
    logger.log('info', 'A request was received for endpoint /test');
  });

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
  logger.info("Listening on 3001!" );
});

function one(){
  console.log("Hello");
};
