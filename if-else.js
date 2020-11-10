
//IF STATEMENT PRACTICE PROBLEMS
//1.)
function random(){
    return Math.floor(Math.random()*1000);
}
let min=Number.MAX_VALUE;
let max=Number.MIN_VALUE;
for(let i=0;i<5;i++){
    let randomNo = random();
    if(min>randomNo)
    min=randomNo;
    if(max<randomNo)
    max=randomNo;
}
console.log(min);
console.log(max);

//2.)
const readline = require('readline-sync');
var date = readline.question('enter the date ');
    var check = checkDate(date);
    console.log(check);

function checkDate(givenDate){
    var dateFrom = new Date("03/20/2019");
    var dateTo = new Date("03/20/2020");
    var check = new Date(givenDate);
    if(check < dateTo && check > dateFrom)
        return true;
    else return false;   
}

//3.)
var year = readline.question("enter the year ")
    console.log(checkLeapYear(year));

function checkLeapYear(year){
    return ((year%4==0 && year%100!=0)||(year%400==0));       
}

//4.)
function headsOrTails(){
    let toss = Math.floor(Math.random()*10)%2;
    if(toss == 0 )
    return "Heads";
    return "Tails";
}
console.log(headsOrTails());

//if else statement problems
//1.)
function numberToWord(number){
    var words = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    return words[number];
}
let number = Math.floor(Math.random()*10);
console.log(numberToWord(number));

//2.)
function weekDay(number)
{
    var days = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
    return days[number];
}
let day = Math.floor(Math.random()*7);
console.log(weekDay(day));

//3.)
function units(number){
    var unit = ["unit","ten","hundred","thousand","ten thousand","lakhs","ten lakhs","lakh"];
    let place=0;
    while(number!=1){
        number=number/10;  
        place++;  
    }
    return unit[place];
}
console.log(units(1000));

//4.)
{
    let a = Math.floor(Math.random()*10);
    let b = Math.floor(Math.random()*10);
    let c = Math.floor(Math.random()*10);
    let min = a+b*c;
    let max = a+b*c;
    let two= c+a/b;
    if(two>max)
        max=two;
    if(two<min)
        min = two;
    let three= a*b+c;
    if(three>max)
        max=three;
    if(three<min)
        min = three;
    let four= a%b+c;
    if(four>max)
        max=four;
    if(four<min)
        min = four;    
    console.log("max is " +max);
    console.log("min is " +min);
}
