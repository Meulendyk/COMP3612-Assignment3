//Referencing required modules
const fs = require('fs').promises;
const path = require('path');

//Constructing path 
const jsonPath = path.join(__dirname, '../data', 'circuits.json');

//Function - Pull data from JSON path and return array, error message if failed
let circuits;
getCircuitsData(jsonPath);
async function getCircuitsData(jsonPath) {
    //Error checking
    try {
        const data = await fs.readFile(jsonPath, "utf-8");
        circuits = JSON.parse(data);
    }
    catch (err) {console.log('Error reading ' + jsonPath); }
}
//Returning JSON data for modules
function getCircData() {
    return circuits;
}

//Make getCircData available to modules
module.exports = { getCircData };

