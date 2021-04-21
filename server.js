// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
const cors = require('cors');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000;

const server = app.listen(port, listening);
function listening() {
    console.log(`running on localhost: ${port}`);
};

app.post('/addWeather', addWeather);

function addWeather(req, res) {
    newEntry = {
        temps: req.body.temps,
        date: req.body.date,
        feelings: req.body.feelings
    }
    projectData.push(newEntry);
    res.send(projectData);
    console.log(projectData);
}
/*
app.get('/all', getData);

function getData(req, res) {
    res.send(projectData);
    console.log(projectData);
}*/