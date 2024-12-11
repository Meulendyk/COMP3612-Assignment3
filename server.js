//referencing required modules
const path = require('path');
const express = require('express');
const app = express();

//reference our modules
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

circuitsHandler.handleAllCirc(circuitsProvider, app);
circuitsHandler.handleCircId(circuitsProvider, app);

constructorsHandler.handleAllConst(constructorsProvider, app);
constructorsHandler.handleConstRef(constructorsProvider, app);

driversHandler.handleAllDrivers(driversProvider, app);
driversHandler.handleDriversRef(driversProvider, app);

racesHandler.handleAllRaces(racesProvider, app);
racesHandler.handleRacesYear(racesProvider, app);
racesHandler.handleRacesId(racesProvider, app);







app.use( (req,resp) => {
    resp.status(404).send('Unable to find the requested resource!');
});

const port = 8080;
app.listen(port, () => {
    console.log('Server running at port=' + port);
});

