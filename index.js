'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()

// Set Le Port
app.set('port', (process.env.PORT || 5000))

// Trust.. Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// Trust.. Process application/json
app.use(bodyParser.json())

// Index route. Keep funny for Lols
app.get('/', function (req, res) {
	res.send('Convincing AI not to turn evil..')
})

// For Facebook verification
app.get('/webhook/', function (req, res) {
	if (req.query['hub.verify_token'] === 'my_voice_is_my_password_verify_me') {
		res.send(req.query['hub.challenge'])
	}
	res.send('Error, wrong token')
})

// Spin up that server
app.listen(app.get('port'), function() {
  console.log('On port', app.get('port'))
})
