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
        const refToFind = parseInt(req.params.ref, 10);
        const foundConstructor = constructors.filter(obj => refToFind === obj.id);
        if (foundConstructor.length > 0) {
            resp.json(foundConstructor);
        } else {
            resp.json(jsonMessage(`Constructor with ref ${refToFind} not found`));
        }
    });
};

const handleConstRefAndSeason = (constructorProvider, app) => {
    app.get('/api/constructorResults/:ref/:year', (req, resp) => {
        const constructors = constructorProvider.getConstData();
        const refToFind = parseInt(req.params.ref, 10);
        const yearToFind = parseInt(req.params.year, 10);

        const foundConstructor = constructors.filter(obj => obj.ref == refToFind && obj.year == yearToFind);

        if (foundConstructor.length > 0) {
            resp.json(foundConstructor);
        } else {
            resp.json(jsonMessage(`Constructor with ref ${refToFind} & year ${yearToFind} not found`));
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