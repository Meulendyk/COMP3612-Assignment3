const fs = require('fs').promises;

//constructing path
const jsonPath = path.join(__dirname, '../data', 'constructors.json');

//get data
let constructors;
getConstructorsData(jsonPath);
async function getConstructorsData(jsonPath) {
    try {
        const data = await fs.readFile(jsonPath, "utf-8");
        constructors = JSON.parse(data);
    }
    catch (err) {console.log('Error reading' + jsonPath); }
}
function getConstData() {
    return constructors;
}

//make getConstData available for handler
module.exports = { getConstData };

