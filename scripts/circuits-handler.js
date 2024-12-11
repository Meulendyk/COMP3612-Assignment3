//return all circuits
const handleAllCirc = (circuitProvider, app) => {
    app.get('/api/circuits/', (req, resp) => {

        //get data from circuit provider
        const circuits = circuitProvider.getCircData();
        resp.json(circuits);
    });
};

//returns circuit of specific id
const handleCircId = (circuitProvider, app) => {
    app.get('/api/circuits/:id', (req, resp) => {
        const circuits = circuitProvider.getCircData();
        const idToFind = req.params.id;
        const foundCircuit = circuits.filter(obj => idToFind == obj.circuitId);
        if (foundCircuit.length > 0) {
            resp.json(foundCircuit);
        } else {
            resp.json(jsonMessage(`ID ${idToFind} not found`));
        }
    });
};

const jsonMessage = (msg) => {
    return { message: msg };
};

module.exports = {
    handleAllCirc,
    handleCircId
};