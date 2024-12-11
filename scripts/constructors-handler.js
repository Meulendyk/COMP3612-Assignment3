//return all constructors
const handleAllConst = (constructorProvider, app) => {
    app.get('/api/constructors/', (req, resp) => {

        //get data from constructor provider
        const constructors = constructorProvider.getConstData();
        resp.json(constructors);
    });
};

//returns constructor of specific ref
const handleConstRef = (constructorProvider, app) => {
    app.get('/api/constructors/:ref', (req, resp) => {
        const constructors = constructorProvider.getConstData();
        const refToFind = req.params.ref;
        const foundConstructor = constructors.filter(obj => refToFind == obj.constructorRef);
        if (foundConstructor.length > 0) {
            resp.json(foundConstructor);
        } else {
            resp.json(jsonMessage(`Constructor with ref ${refToFind} not found`));
        }
    });
};

const handleConstRefAndSeason = (constructorProvider, raceProvider, resultProvider, app) => {
    app.get('/api/constructorResults/:ref/:year', (req, resp) => {
        const constructors = constructorProvider.getConstData();
        const races = raceProvider.getRacData();
        const results = resultProvider.getResData();

        const refToFind = req.params.ref;
        const yearToFind = req.params.year;

        const foundResult = constructors.filter(obj => obj.constructor.ref == refToFind && obj.race.year == yearToFind);
        if (foundResult.length > 0) {
            resp.json(foundResult);
        } else {
            resp.json(jsonMessage(`Constructor with ref ${refToFind} not found`));
        }

    })
}

const jsonMessage = (msg) => {
    return { message: msg };
};

module.exports = {
    handleAllConst,
    handleConstRef,
    handleConstRefAndSeason
};