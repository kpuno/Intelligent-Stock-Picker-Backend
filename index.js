// Main starting point of application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');
const favicon = require('serve-favicon');

// DB Setup
mongoose.connect(process.env.URI || 'mongodb://admin:admin@ds137957.mlab.com:37957/isp-comp313');
// mongodb://admin:admin@ds137957.mlab.com:37957/isp-comp313
// favicon
app.use(favicon(__dirname + '/favicon.ico'));

// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server Setup
const port = process.env.PORT || 7777;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);
