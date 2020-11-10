// SEQUENCE PRACTICE PROBLEMS
//1.)
let data = Math.floor(Math.random()*10);
console.log(data);

//2.)
var dice = Math.floor(Math.random()*6) +1;
console.log(dice);

//3.)
var dice = Math.floor(Math.random()*6) +1;
let dice1 = Math.floor(Math.random()*6) +1;
console.log(dice+dice1);

//4.)

//case statements problems
//4.)
{
function convertFeetInchesUnits(value, type) {
    switch (type) {
        case "FEET":
            return value * 12;
        case "INCHES":
            return value / 12;
    }
}
function convertFeetMeterUnits(value, type) {
    switch (type) {
        case "FEET":
            return value * 0.3048;
        case "METER":
            return value* 3.28084;
    }
}
let data = readline.question("enter the data ")
console.log(convertFeetInchesUnits(data,"FEET"));
console.log(convertFeetInchesUnits(data,"INCHES"));
console.log(convertFeetMeterUnits(data,"FEET"));
console.log(convertFeetMeterUnits(data,"METER"));
}