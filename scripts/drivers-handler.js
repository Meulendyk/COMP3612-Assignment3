//return all drivers
const handleAllDriv = (driverProvider, app) => {
    app.get('/api/drivers/', (req, resp) => {

        //get data from driver provider
        const drivers = driverProvider.getDrivData();
        resp.json(drivers);
    });
};

//returns driver of specific ref
const handleDrivRef = (driverProvider, app) => {
    app.get('/api/drivers/:ref', (req, resp) => {
        const drivers = driverProvider.getDrivData();
        const refToFind = req.params.ref;
        const foundDriver = drivers.filter(obj => refToFind === obj.driverRef);
        if (foundDriver.length > 0) {
            resp.json(foundDriver);
        } else {
            resp.json(jsonMessage(`Driver with ref ${refToFind} not found`));
        }
    });
};

const handleDrivRefAndSeason = (driverProvider, raceProvider, resultProvider, app) => {
    app.get('/api/driverResults/:ref/:year', (req, resp) => {
        const drivers = driverProvider.getDrivData();
        const races = raceProvider.getRacData();
        const results = resultProvider.getResData();

        const refToFind = req.params.ref;
        const yearToFind = req.params.year;

        const foundResult = results.filter(obj => obj.driver.ref == refToFind && obj.race.year == yearToFind);

        if (foundResult.length > 0) {
            resp.json(foundResult);
        } else {
            resp.json(jsonMessage(`Driver with ref ${refToFind} & year ${yearToFind} not found`));
        }
    })
}

const jsonMessage = (msg) => {
    return { message: msg };
};

module.exports = {
    handleAllDriv,
    handleDrivRef,
    handleDrivRefAndSeason
};