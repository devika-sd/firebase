var express = require('express');
var app = express();
var routing = require('./routing/route');

app.use(express.json());

routing(app);

app.listen(8080,()=>{
    console.log("server is listening on post 8080")
})