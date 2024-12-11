//return all drivers
const handleAllRaces = (racesProvider, app) => {
    app.get('/api/races/', (req, resp) => {

        //get data from race provider
        const races = racesProvider.getRacData();
        resp.json(races);
    });
};

//returns driver of specific ref
const handleRacesYear = (racesProvider, app) => {
    app.get('/api/races/season/:year', (req, resp) => {
        const races = racesProvider.getRacData();
        const yearToFind = req.params.year;
        const foundRaces = races.filter(obj => yearToFind === obj.year);
        if (foundRaces.length > 0) {
            resp.json(foundRaces);
        } else {
            resp.json(jsonMessage(`Races with year ${yearToFind} not found`));
        }
    });
};

const handleRacesId = (racesProvider, app) => {
    app.get('/api/races/id/:id', (req, resp) => {
        const races = racesProvider.getRacData();

        const idToFind = req.params.id;

        const foundRaces = results.filter(obj => idToFind == obj.id);

        if (foundRaces.length > 0) {
            resp.json(foundRaces);
        } else {
            resp.json(jsonMessage(`Race with id ${idToFind} not found`));
        }
    })
}

const jsonMessage = (msg) => {
    return { message: msg };
};

module.exports = {
    handleAllRaces,
    handleRacesYear,
    handleRacesId
};