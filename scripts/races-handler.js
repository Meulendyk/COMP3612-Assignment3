//Function - Return all races
const handleAllRaces = (racesProvider, app) => {
    //When path is entered get data
    app.get('/api/races/', (req, resp) => {

        //Get data from circuit provider
        const races = racesProvider.getRacData();
        resp.json(races);
    });
};

//Function - Returns races of specific ref
const handleRacesYear = (racesProvider, app) => {
    //When path is entered get data
    app.get('/api/races/season/:year', (req, resp) => {

        //Pull all data from JSON 
        const races = racesProvider.getRacData();

        //Establish variables for filter 
        const yearToFind = req.params.year;

        //Function - foundRaces filters path variables and creates array
        const foundRaces = races.filter(obj => yearToFind == obj.year);

        //Return array if array is not empty, error message if so
        if (foundRaces.length > 0) {
            resp.json(foundRaces);
        } else {
            resp.json(jsonMessage(`Races with year ${yearToFind} not found`));
        }
    });
};

//Function - Returns races of specific id
const handleRacesId = (racesProvider, app) => {
    //When path is entered get data
    app.get('/api/races/id/:id', (req, resp) => {

        //Pull all data from JSON 
        const races = racesProvider.getRacData();

        //Establish variables for filter 
        const idToFind = req.params.id;

        //Function - foundRaces filters path variables and creates array
        const foundRaces = races.filter(obj => idToFind == obj.id);

        //Return array if array is not empty, error message if so
        if (foundRaces.length > 0) {
            resp.json(foundRaces);
        } else {
            resp.json(jsonMessage(`Race with id ${idToFind} not found`));
        }
    })
}

//Function - Used to display error message
const jsonMessage = (msg) => {
    return { message: msg };
};

//Exported functions
module.exports = {
    handleAllRaces,
    handleRacesYear,
    handleRacesId
};