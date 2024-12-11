//Referencing required modules
const fs = require('fs').promises;
const path = require('path');

//Constructing path 
const jsonPath = path.join(__dirname, '../data', 'drivers.json');

//Function - Pull data from JSON path and return array, error message if failed
let drivers;
getDriversData(jsonPath);

//Callback
async function getDriversData(jsonPath) {
    //Error checking
    try {
        const data = await fs.readFile(jsonPath, "utf-8");
        drivers = JSON.parse(data);
    }
    catch (err) {console.log('Error reading' + jsonPath); }
}

//Function - Returning JSON data for modules
function getDrivData() {
    return drivers;
}

//make getDrivData available for handler
module.exports = { getDrivData };

