const fs = require('fs').promises;
const path = require('path');

//constructing path
const jsonPath = path.join(__dirname, './data', 'circuits.json');

//get data
let circuits;
getCircuitsData(jsonPath);
async function getCircuitsData(jsonPath) {
    try {
        const data = await fs.readFile(jsonPath, "utf-8");
        circuits = JSON.parse(data);
    }
    catch (err) {console.log('Error reading' + jsonPath); }
}
function getCircData() {
    return circuits;
}

//make getCircData available
module.exports = { getCircData };

