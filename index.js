//Find MAC Address
//cd node_modules/node-dash-button
//sudo node bin/findbutton

console.log("HOLA");

require('dotenv').config();

var dash_button = require('node-dash-button');
var dash = dash_button(process.env.ADDRESS, null, null, 'all');

var {IncomingWebhook} = require('@slack/client');
var url =  process.env.SLACK_WEBHOOK_URL; // TEST
var webhook = new IncomingWebhook(url);
var mins = 1 // 12 minutes to brew a pot

dash.on("detected", function (){
	payload={
		"text": "Come and join us!! Meeting with food :cake:"
	}

  sendWebhook = function () {
    webhook.send(payload, function(err, res) {
	    if (err) {
	        console.log('Error:', err);
	    } else {
	        console.log('Message sent: ', res);
      }
    });
  }
  setTimeout(sendWebhook, mins);
});
