//Referencing required modules
const fs = require('fs').promises;
const path = require('path');

//Constructing path 
const jsonPath = path.join(__dirname, '../data', 'constructors.json');

//Function - Pull data from JSON path and return array, error message if failed
let constructors;
getConstructorsData(jsonPath);
async function getConstructorsData(jsonPath) {
    //Error checking
    try {
        const data = await fs.readFile(jsonPath, "utf-8");
        constructors = JSON.parse(data);
    }
    catch (err) {console.log('Error reading' + jsonPath); }
}
//Returning JSON data for modules
function getConstData() {
    return constructors;
}

//Make getConstData available for handler
module.exports = { getConstData };

