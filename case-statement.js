//case statements problems
//4.)
const readline = require('readline-sync');
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