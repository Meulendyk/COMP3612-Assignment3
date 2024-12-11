//Referencing required modules
const fs = require('fs').promises;
const path = require('path');

//Constructing path 
const jsonPath = path.join(__dirname, '../data', 'results.json');

//Function - Pull data from JSON path and return array, error message if failed
let results;
getResultsData(jsonPath);

//Callback
async function getResultsData(jsonPath) {
    //Error checking
    try {
        const data = await fs.readFile(jsonPath, "utf-8");
        results = JSON.parse(data);
    }
    catch (err) {console.log('Error reading' + jsonPath); }
}

//Function - Returning JSON data for modules
function getResData() {
    return results;
}

//make getResData available for handler
module.exports = { getResData };

