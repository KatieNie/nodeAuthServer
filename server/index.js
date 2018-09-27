// Main starting point of the application

// Speed through the Express stuff, not a course on this
// We don't have access to full ES6, no import statements

// old way of file sharing
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

// DB Setup
// Creates a database in Mongo called auth
mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true });

// App Setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*'}));
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);