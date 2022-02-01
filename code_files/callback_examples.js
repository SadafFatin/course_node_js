const fs = require('fs');

function writeDataIntoFile(data, callback) {
    fs.writeFile('read.txt', data, callback);
}

writeDataIntoFile("Content to be written", (err) => {
    if (err) {
        console.log('Error occurred while file writing', err);
    } else {
        console.log('File written successfully');
    }
});

console.log('This should be printed after the file operation if it was an sync op.')