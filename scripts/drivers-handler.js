//return all drivers
const handleAllDrivers = (driversProvider, app) => {
    app.get('/api/drivers/', (req, resp) => {

        //get data from driver provider
        const drivers = driversProvider.getDrivData();
        resp.json(drivers);
    });
};

//returns driver of specific ref
const handleDriversRef = (driversProvider, app) => {
    app.get('/api/drivers/:ref', (req, resp) => {
        const drivers = driversProvider.getDrivData();
        const refToFind = req.params.ref;
        const foundDrivers = drivers.filter(obj => refToFind === obj.driverRef);
        if (foundDrivers.length > 0) {
            resp.json(foundDrivers);
        } else {
            resp.json(jsonMessage(`Driver with ref ${refToFind} not found`));
        }
    });
};

const jsonMessage = (msg) => {
    return { message: msg };
};

module.exports = {
    handleAllDrivers,
    handleDriversRef,
};