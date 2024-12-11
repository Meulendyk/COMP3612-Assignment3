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
        const refToFind = parseInt(req.params.ref, 10);
        const foundDriver = drivers.filter(obj => refToFind === obj.id);
        if (foundDriver.length > 0) {
            resp.json(foundDriver);
        } else {
            resp.json(jsonMessage(`Driver with ref ${refToFind} not found`));
        }
    });
};

const handleDrivRefAndSeason = (driverProvider, app) => {
    app.get('/api/driverResults/:ref/:year', (req, resp) => {
        const drivers = driverProvider.getCircData();
        const refToFind = parseInt(req.params.ref, 10);
        const yearToFind = parseInt(req.params.year, 10);

        const foundDriver = drivers.filter(obj => obj.ref == refToFind && obj.year == yearToFind);

        if (foundDriver.length > 0) {
            resp.json(foundDriver);
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