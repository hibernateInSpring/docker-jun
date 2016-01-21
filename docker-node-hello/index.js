var express = require('express');
//Constans
var PORT = 8080;

//APP
var app = express();
app.get('/',function(req, res){
	res.send('<h1>it works!</h1>');
});

app.listen(PORT);
console.log('running on http://localhost:' + PORT);
