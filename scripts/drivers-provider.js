const fs = require('fs').promises;
const path = require('path');

//constructing path
const jsonPath = path.join(__dirname, './data', 'drivers.json');

//get data
let drivers;
getDriversData(jsonPath);
async function getDriversData(jsonPath) {
    try {
        const data = await fs.readFile(jsonPath, "utf-8");
        drivers = JSON.parse(data);
    }
    catch (err) {console.log('Error reading' + jsonPath); }
}
function getDrivData() {
    return drivers;
}

//make getDrivData available for handler
module.exports = { getDrivData };

