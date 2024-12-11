//Function - Return all race results from specific constructor ref and season
const handleConstResults = (constructorsProvider, racesProvider, resultsProvider, app) => {
    //When path is entered get data
    app.get('/api/constructorResults/:ref/:year', (req, resp) => {
        
        //Get data from providers
        const constructors = constructorsProvider.getConstData();
        const races = racesProvider.getRacData();
        const results = resultsProvider.getResData();

        //Establish variables for filter 
        const refToFind = req.params.ref;
        const yearToFind = req.params.year;

        //Function - foundResults filters path variables and creates array
        const foundResults = results.filter(obj => obj.constructor.ref == refToFind && obj.race.year == yearToFind);
        
        //Return array if array is not empty, error message if so
        if (foundResults.length > 0) {
            resp.json(foundResults);
        } else {
            resp.json(jsonMessage(`Result with constructor ref ${refToFind} & year ${yearToFind} not found`));
        }

    })
}

//Function - Return all race results from specific driver ref and season
const handleDriversResults = (driversProvider, racesProvider, resultsProvider, app) => {
    //When path is entered get data
    app.get('/api/driverResults/:ref/:year', (req, resp) => {

        //Pull all data from JSON 
        const drivers = driversProvider.getDrivData();
        const races = racesProvider.getRacData();
        const results = resultsProvider.getResData();

        //Establish variables for filter 
        const refToFind = req.params.ref;
        const yearToFind = req.params.year;
        
        //Function - foundResults filters path variables and creates array
        const foundResults = results.filter(obj => obj.driver.ref == refToFind && obj.race.year == yearToFind);

        //Return array if array is not empty, error message if so
        if (foundResults.length > 0) {
            resp.json(foundResults);
        } else {
            resp.json(jsonMessage(`Driver with ref ${refToFind} & year ${yearToFind} not found`));
        }
    })
}

//Function - Return all results of specific id
const handleIdResults = (racesProvider, app) => {
    //When path is entered get data
    app.get('/api/results/race/:id', (req, resp) => {

        //Pull all data from JSON 
        const results = racesProvider.getRacData();

        //Establish variables for filter 
        const idToFind = req.params.id;

        //Function - foundCircuit filters path variables and creates array
        const foundResults = results.filter(obj => obj.id == idToFind);

        //Return array if array is not empty, error message if so
        if (foundResults.length > 0) {
            resp.json(foundResults);
        } else {
            resp.json(jsonMessage(`Driver with id ${idToFind} not found`));
        }
    })
}

//Function - Return all results of specific id
const handleSeasonResults = (racesProvider, app) => {
    //When path is entered get data
    app.get('/api/results/season/:year', (req, resp) => {

        //Pull all data from JSON 
        const results = racesProvider.getRacData();

        //Establish variables for filter 
        const yearToFind = req.params.year;

        //Function - foundCircuit filters path variables and creates array
        const foundResults = results.filter(obj => obj.year == yearToFind);

        //Return array if array is not empty, error message if so
        if (foundResults.length > 0) {
            resp.json(foundResults);
        } else {
            resp.json(jsonMessage(`Driver with year ${yearToFind} not found`));
        }
    })
}

//Function - Used to display error message
const jsonMessage = (msg) => {
    return { message: msg };
};

//Exported functions
module.exports = {
    handleConstResults,
    handleDriversResults,
    handleIdResults,
    handleSeasonResults
}