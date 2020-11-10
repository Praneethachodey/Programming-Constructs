//UC1 IF ELSE Condition
{
    const IS_ABSENT=0;
    let empCheck = Math.floor(Math.random()*10)%2;
    if(empCheck== IS_ABSENT){
        console.log("UC1 - employee is absent. Exiting the program");
        return;
    }else{
        console.log("UC1 - employee is present");
    }
}

//uc2 Switch case
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const FULL_TIME_HOURS=8;
const PART_TIME_HOURS=4;
const WAGE_PER_HOUR=20;

function getWorkingHours(empCheck){
switch(empCheck){
    case IS_PART_TIME:
        return PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        return FULL_TIME_HOURS;
        break;
    default:
        return 0;
}
}

const NUM_OF_WORKING_DAYS=2;
let totalEmpHrs=0;
for(let day=0;day<NUM_OF_WORKING_DAYS;day++){
let empCheck = Math.floor(Math.random()*10)%3; 
     totalEmpHrs += getWorkingHours(empCheck);
}

let empWage = totalEmpHrs*WAGE_PER_HOUR;
console.log("emp wage : " + empWage);




