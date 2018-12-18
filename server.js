const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./api/models/userModel');

const app = express();
const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/Tododb'); // local mongodb setup

// mongodb atlas setup
const uri = 'mongodb+srv://nikssa:%23N4poli%21@siterka-mongodb-wklcx.mongodb.net';
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    dbName: 'users',
    retryWrites: true
};


mongoose.connect(uri, options, function(error){
    if (error) console.log('mongoose connection error: ' + error)
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/usersRoutes');
routes(app);

app.listen(port);
console.log('todo list RESTful API server started on: ' + port);

module.exports = app;