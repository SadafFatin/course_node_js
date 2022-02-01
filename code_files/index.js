let area_module = require('./area_module');
let read_write_module = require('./read_write_into_file.js');

//decomposing object with key name same as property
let { areaOfTriangle, areaOfRectangle } = require('./area_module').areaOfPlanes;

console.log('Area of circle is', area_module.areaOfCircle(10));
console.log('Area of triangle is', areaOfTriangle(10, 10));
console.log('Area of rectangle is', areaOfRectangle(10, 10));
console.log('Area of Cylinder is', area_module.areaOfCylinder(10, 10));


//Using readline api in read_write_into_files.js module 
//to take input and receive result through passing callback function
read_write_module.readLineFromCommandLine((answer) => {
    console.log(answer);
    read_write_module.writeDataIntoFile(answer, (err) => {
        if (!err) {
            console.log("Written into file");
        } else {
            console.log("Error Writing into file", err);
        }
    });
});