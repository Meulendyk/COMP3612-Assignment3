const fs = require('fs').promises;

//constructing path
const jsonPath = path.join(__dirname, './data', 'qualifying.json');

//get data
let qualifying;
getQualifyingData(jsonPath);
async function getQualifyingData(jsonPath) {
    try {
        const data = await fs.readFile(jsonPath, "utf-8");
        qualifying = JSON.parse(data);
    }
    catch (err) {console.log('Error reading' + jsonPath); }
}
function getQualData() {
    return qualifying;
}

//make getQualData available for handler
module.exports = { getQualData };

