//Function - Return all constructors
const handleAllConst = (constructorsProvider, app) => {
    //When path is entered get data
    app.get('/api/constructors/', (req, resp) => {

        //Get data from circuit provider
        const constructors = constructorsProvider.getConstData();
        resp.json(constructors);
    });
};

//Function - Returns constructor of specific ref
const handleConstRef = (constructorsProvider, app) => {
    //When path is entered get data
    app.get('/api/constructors/:ref', (req, resp) => {

        //Pull all data from JSON 
        const constructors = constructorsProvider.getConstData();

        //Establish variables for filter 
        const refToFind = req.params.ref
        refToFind = refToFind.toLowerCase();

        //Function - foundConstructors filters path variables and creates array
        const foundConstructors = constructors.filter(obj => refToFind == obj.constructorRef);
        
        //Return array if array is not empty, error message if so
        if (foundConstructors.length > 0) {
            resp.json(foundConstructors);
        } else {
            resp.json(jsonMessage(`Constructor with ref ${refToFind} not found`));
        }
    });
};

//Function - Used to display error message
const jsonMessage = (msg) => {
    return { message: msg };
};

//Exported functions
module.exports = {
    handleAllConst,
    handleConstRef,
};