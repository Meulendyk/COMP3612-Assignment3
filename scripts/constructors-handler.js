//return all constructors
const handleAllConst = (constructorsProvider, app) => {
    app.get('/api/constructors/', (req, resp) => {

        //get data from constructor provider
        const constructors = constructorsProvider.getConstData();
        resp.json(constructors);
    });
};

//returns constructor of specific ref
const handleConstRef = (constructorsProvider, app) => {
    app.get('/api/constructors/:ref', (req, resp) => {
        const constructors = constructorsProvider.getConstData();
        const refToFind = req.params.ref;
        const foundConstructors = constructors.filter(obj => refToFind == obj.constructorRef);
        if (foundConstructors.length > 0) {
            resp.json(foundConstructors);
        } else {
            resp.json(jsonMessage(`Constructor with ref ${refToFind} not found`));
        }
    });
};

const jsonMessage = (msg) => {
    return { message: msg };
};

module.exports = {
    handleAllConst,
    handleConstRef,
};