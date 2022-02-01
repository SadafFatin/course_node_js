function areaOfRectangle(length, height) {
    return length * height;

}

function areaOfCylinder(radius, height) {
    return 2 * Math.PI * radius * height + 2 * Math.PI * radius;
}

function areaOfTriangle(base, height) {
    return (base * height) / 2;

}

function areaOfCircle(radius) {
    return Math.PI * Math.pow(radius, 2);
}

//Recommended Way of exporting
module.exports.areaOfCircle = areaOfCircle

//Another way of exporting
module.exports.areaOfPlanes = {
    areaOfTriangle,
    areaOfRectangle
}

//Short hand for module.exports is exports
exports.areaOfCylinder = areaOfCylinder;