//Returns race results of specified constructor ref and season
const handleConstResults = (constructorProvider, raceProvider, resultProvider, app) => {
    app.get('/api/constructorResults/:ref/:year', (req, resp) => {
        const constructors = constructorProvider.getConstData();
        const races = raceProvider.getRacData();
        const results = resultProvider.getResData();

        const refToFind = req.params.ref;
        const yearToFind = req.params.year;

        const foundResults = constructors.filter(obj => obj.constructor.ref == refToFind && obj.race.year == yearToFind);
        if (foundResults.length > 0) {
            resp.json(foundResults);
        } else {
            resp.json(jsonMessage(`Constructor with ref ${refToFind} not found`));
        }

    })
}

//Returns race results of specified driver ref and season
const handleDrivResults = (driverProvider, raceProvider, resultProvider, app) => {
    app.get('/api/driverResults/:ref/:year', (req, resp) => {
        const drivers = driverProvider.getDrivData();
        const races = raceProvider.getRacData();
        const results = resultProvider.getResData();

        const refToFind = req.params.ref;
        const yearToFind = req.params.year;

        const foundResults = results.filter(obj => obj.driver.ref == refToFind && obj.race.year == yearToFind);

        if (foundResults.length > 0) {
            resp.json(foundResults);
        } else {
            resp.json(jsonMessage(`Driver with ref ${refToFind} & year ${yearToFind} not found`));
        }
    })
}

const handleIdResults = (raceProvider, app) => {
    app.get('/api/results/race/:id', (req, resp) => {
        const results = raceProvider.getRacData();

        const idToFind = req.params.id;

        const foundResults = results.filter(obj => obj.id == idToFind);

        if (foundResults.length > 0) {
            resp.json(foundResults);
        } else {
            resp.json(jsonMessage(`Driver with id ${idToFind} not found`));
        }
    })
}

const handleSeasonResults = (raceProvider, app) => {
    app.get('/api/results/race/:year', (req, resp) => {
        const results = raceProvider.getRacData();

        const yearToFind = req.params.year;

        const foundResults = results.filter(obj => obj.year == yearToFind);

        if (foundResults.length > 0) {
            resp.json(foundResults);
        } else {
            resp.json(jsonMessage(`Driver with year ${yearToFind} not found`));
        }
    })
}

const jsonMessage = (msg) => {
    return { message: msg };
};

module.exports = {
    handleConstResults,
    handleDrivResults,
    handleIdResults,
    handleSeasonResults
}