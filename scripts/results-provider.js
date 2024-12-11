const fs = require('fs').promises;
const path = require('path');

//constructing path
const jsonPath = path.join(__dirname, './data', 'results.json');

//get data
let results;
getResultsData(jsonPath);
async function getResultsData(jsonPath) {
    try {
        const data = await fs.readFile(jsonPath, "utf-8");
        results = JSON.parse(data);
    }
    catch (err) {console.log('Error reading' + jsonPath); }
}
function getResData() {
    return results;
}

//make getResData available for handler
module.exports = { getResData };

