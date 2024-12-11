//Function - Return all drivers
const handleAllDrivers = (driversProvider, app) => {
    //When path is entered get data
    app.get('/api/drivers/', (req, resp) => {

        //get data from driver provider
        const drivers = driversProvider.getDrivData();
        resp.json(drivers);
    });
};

//Function - Returns drivers of specific ref
const handleDriversRef = (driversProvider, app) => {

    //When path is entered get data
    app.get('/api/drivers/:ref', (req, resp) => {

        //Pull all data from JSON 
        const drivers = driversProvider.getDrivData();

        //Establish variables for filter 
        const refToFind = req.params.ref.toLowerCase();

        //Function - foundDrivers filters path variables and creates array
        const foundDrivers = drivers.filter(obj => refToFind == obj.driverRef.toLowerCase());

        //Return array if array is not empty, error message if so
        if (foundDrivers.length > 0) {
            resp.json(foundDrivers);
        } else {
            resp.json(jsonMessage(`Driver with ref ${refToFind} not found`));
        }
    });
};

//Function - Used to display error message
const jsonMessage = (msg) => {
    return { message: msg };
};

//Exported functions
module.exports = {
    handleAllDrivers,
    handleDriversRef,
};