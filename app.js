var express = require('express');
var bodyParser = require('body-parser');

var app =  express();
var port = process.env.PORT || 1337;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {res.status(200).send('Hello Dear !');  });

app.listen(port, function() {
	console.log('Listening on port ' + port);
});

app.post('/hello', function(req, res, next) {
	var username = req.body.user_name;
	var botpayload = {
		text: 'Hello' + username + ', Welcome to Bot World :)'
	};

	if (username !== 'slackbot') {
		return res.status(200).json(botpayload);
	}
	else{
		return res.status(200).end();
	}

});