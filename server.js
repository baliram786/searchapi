const express = require("express");
const router = require('./src/router')
var cors = require('cors')
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = 8080;
var db = 'mongodb://localhost/UserDetail';

const app = express();
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);
mongoose.connect(db);


// registering express middlewares
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', router);

// Gearing up the express server
var port = process.env.PORT || 3001;
app.listen(port, function () {

    console.log("Server Details :")
    console.log("--------------")
    console.log(`Server Started listening at port (${port})`);
    console.log()

});