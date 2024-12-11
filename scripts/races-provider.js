const fs = require('fs').promises;

//constructing path
const jsonPath = path.join(__dirname, './data', 'races.json');

//get data
let races;
getRacesData(jsonPath);
async function getRacesData(jsonPath) {
    try {
        const data = await fs.readFile(jsonPath, "utf-8");
        races = JSON.parse(data);
    }
    catch (err) {console.log('Error reading' + jsonPath); }
}
function getRacData() {
    return races;
}

//make getRacData available for handler
module.exports = { getRacData };

