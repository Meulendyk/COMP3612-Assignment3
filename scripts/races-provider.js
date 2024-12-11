//Referencing required modules
const fs = require('fs').promises;
const path = require('path');

//Constructing path 
const jsonPath = path.join(__dirname, '../data', 'races.json');

//Function - Pull data from JSON path and return array, error message if failed
let races;
getRacesData(jsonPath);

//Callback
async function getRacesData(jsonPath) {
    //Error checking
    try {
        const data = await fs.readFile(jsonPath, "utf-8");
        races = JSON.parse(data);
    }
    catch (err) {console.log('Error reading' + jsonPath); }
}

//Function - Returning JSON data for modules
function getRacData() {
    return races;
}

//make getRacData available for handler
module.exports = { getRacData };

