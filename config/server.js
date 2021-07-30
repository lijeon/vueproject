const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB');
const projectfiles = require ('../routes/projectfiles');



mongoose.Promise = global.Promise;
mongoose.connect(config.DB);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/projectfiles', projectfiles);

// app.use(/)
var port = process.env.PORT || 4000;

app.listen(port, function (){
    console.log('NodeJS serveri online', port);
});