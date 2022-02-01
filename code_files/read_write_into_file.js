//requiring readline from node api
const readline = require('readline');
//requiring filesystem from node api
const fs = require('fs');

const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });



function readLineFromCommandLine(callback) {

    rl.question('Please Enter Your Text? ', (answer) => {
        // TODO: Log the answer in a database
        // console.log(`Thank you for your valuable feedback: ${answer}`);
        var result = `Thank you for your valuable feedback:${answer}`;
        callback(answer);
        rl.close();
    });
}

function writeDataIntoFile(data, callback) {
    fs.writeFile('./read.txt', data, (err) => {
        callback(err);
    });
}


exports.readLineFromCommandLine = readLineFromCommandLine;

exports.writeDataIntoFile = writeDataIntoFile;