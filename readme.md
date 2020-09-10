## Sexbound - Red Shift
Users can run this as background service while playing Starbound (Sexbound). It will watch the 'starbound.log' file for special SXB_EVENT type events to be outputted, and it will attempt to handle every event it hears by executing associated actions. i.e. Dim the lights in your room, open the garage door, or vibrate an adult toy..

## Prerequisites
* Install NPM

## Quick Start
* Clone this repo.
* Adjust 'config.json' with your own settings.
* Run ```npm install``` and ```npm start```within the cloned directory in terminal.
* Leave the process running in the terminal and while playing Starbound.

## How it works
SXB_EVENT events are forwarded to an API endpoint that you specify. They are sent via a POST request to <API_URL>/record