//Function - Return all circuits
const handleAllCirc = (circuitsProvider, app) => {
    //When path is entered get data
    app.get('/api/circuits/', (req, resp) => {

        //Get data from circuit provider
        const circuits = circuitsProvider.getCircData();
        resp.json(circuits);
    });
};

//Function - Returns circuit of specific id
const handleCircId = (circuitsProvider, app) => {
    //When path is entered get data
    app.get('/api/circuits/:id', (req, resp) => {

        //Pull all data from JSON 
        const circuits = circuitsProvider.getCircData();

        //Establish variables for filter 
        const idToFind = req.params.id;

        //Function - foundCircuit filters path variables and creates array
        const foundCircuit = circuits.filter(obj => idToFind == obj.circuitId);
        
        //Return array if array is not empty, error message if so
        if (foundCircuit.length > 0) {
            resp.json(foundCircuit);
        } else {
            resp.json(jsonMessage(`ID ${idToFind} not found`));
        }
    });
};

//Function - Used to display error message
const jsonMessage = (msg) => {
    return { message: msg };
};

//Exported functions
module.exports = {
    handleAllCirc,
    handleCircId
};