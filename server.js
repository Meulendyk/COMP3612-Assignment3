//Referencing required modules
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
//Reference each of our own modules
const circuitsProvider = require('./scripts/circuits-provider.js');
const circuitsHandler = require('./scripts/circuits-handler.js');

const constructorsProvider = require('./scripts/constructors-provider.js');
const constructorsHandler = require('./scripts/constructors-handler.js');

const driversProvider = require('./scripts/drivers-provider.js');
const driversHandler = require('./scripts/drivers-handler.js');

const racesProvider = require('./scripts/races-provider.js');
const racesHandler = require('./scripts/races-handler.js');

const resultsProvider = require('./scripts/results-provider.js');
const resultsHandler = require('./scripts/results-handler.js');

app.use('/static', express.static(path.join(__dirname, 'public')));

//Creating circuit APIs
circuitsHandler.handleAllCirc(circuitsProvider, app);
circuitsHandler.handleCircId(circuitsProvider, app);

//Creating constructor APIs
constructorsHandler.handleAllConst(constructorsProvider, app);
constructorsHandler.handleConstRef(constructorsProvider, app);

//Creating drivers APIs
driversHandler.handleAllDrivers(driversProvider, app);
driversHandler.handleDriversRef(driversProvider, app);

//Creating races APIs
racesHandler.handleAllRaces(racesProvider, app);
racesHandler.handleRacesYear(racesProvider, app);
racesHandler.handleRacesId(racesProvider, app);

//Creating results APIs
resultsHandler.handleConstResults(constructorsProvider, racesProvider, resultsProvider, app);
resultsHandler.handleDriversResults(driversProvider, racesProvider, resultsProvider, app);
resultsHandler.handleIdResults(racesProvider, app);
resultsHandler.handleSeasonResults(racesProvider, app);

//Display message if not found
app.use( (req,resp) => {
    resp.status(404).send('Unable to find the requested resource!');
});

app.listen(port, () => {
    console.log('Server running at port= ' + port);
});

