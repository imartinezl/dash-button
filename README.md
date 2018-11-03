# Amazon Dash-Button

![Blank Dash](http://i.imgur.com/PP0CJ3s.png?1)

[![Travis-CI Build Status](https://travis-ci.org/hortinstein/node-dash-button.svg)](https://travis-ci.org/hortinstein/node-dash-button)  [![Coverage Status](https://coveralls.io/repos/hortinstein/node-dash-button/badge.svg?branch=master&service=github)](https://coveralls.io/github/hortinstein/node-dash-button?branch=master)  [![gitter](https://img.shields.io/badge/gitter-join%20chat-green.svg?style=flat)](https://gitter.im/hortinstein/node-dash-button)

This module was inspired by [this fantastic article by Edward Bensen](https://medium.com/@edwardbenson/how-i-hacked-amazon-s-5-wifi-button-to-track-baby-data-794214b0bdd8).

This simple script allows the use of [Amazon dash button](https://www.amazon.com/Dash-Buttons/b?ie=UTF8&node=10667898011) to send an slack message to slack. In order to do so, I am using the [node-dash-button](https://github.com/hortinstein/node-dash-button) module.

### Setup
-----------------
- [Installation Instructions](#installation-instructions)
- [First Time Dash Setup](#first-time-dash-setup)
- [Find a Dash](#find-a-dash)

Follow the [node-dash-button](https://github.com/hortinstein/node-dash-button) instructions to find your dash-button id.

#### Installation Instructions
Get the libpcap dependency:
``` sh
$ sudo apt-get install libpcap-dev
```
Clone this repository:
```
$ git clone https://github.com/imartinezl/dashbutton.git
```
Start a [npm](https://www.npmjs.com/) project:
```
$ npm init
```
Install the nodejs modules dependencies included in *package.json*:
```
$ npm install
```

#### First Time Dash Setup

Follow Amazon's instructions to configure your button to send messages when you push them but not actually order anything. When you get a Dash button, Amazon gives you a list of setup instructions to get going. Just follow this list of instructions, but don’t complete the final step (#3 I think) **Do not select a product, just exit the app**.

#### Find Dash Address
To find a dash on your network, run the following from the node-dash-button directory in node_modules:
``` sh
$ cd node_modules/node-dash-button
$ sudo node bin/findbutton
```
It will watch for new arp and udp requests on your network.  There may be several such requests, so press it a few times to make sure. Copy the hardware address as shown below, and make a note of the protocol used.

![hw address](http://i.imgur.com/BngokPC.png)

Note: If your computer has multiple active network interfaces, `findbutton` will use the first one listed. If you need to overwrite this setting, pass your preferred interface
as the first argument, such as `node bin/findbutton eth6`.

#### Define Slack Incoming Webhook
Go to your *Slack Workspace >> Administration >> Manage Apps >> Browse*:
 - Search for: "Incoming WebHooks" and add it*  

Then go to *Manage >> Custom Integrations >> Incoming WebHooks*:
 - Copy the "Slack webhook" under the Setup Instructions


#### Send Message to Slack
Create a *.env* file specifying the ADDRESS, the SLACK_WEBHOOK_URL and the desired MESSAGE:
```
SLACK_WEBHOOK_URL='https://hooks.slack.com/services/*********/*********/*********'
ADDRESS='**:**:**:**:**:**'
MESSAGE='Come and join us!! Meeting with food :cake:'
```
Run the index.js: 
```
$ sudo node index.js
```
