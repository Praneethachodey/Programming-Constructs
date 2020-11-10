const readline = require('readline-sync');
//1.)
let power = readline.question("enter the no to find power of it");
let poweredNumber=1;
let powerCount=1;
while(powerCount<=power && poweredNumber<256){
    poweredNumber*= 2;
    console.log(2 + " ^ " + powerCount + " = " +poweredNumber);
    powerCount++;
}

//2.)
var number = readline.question("enter a no between 1 and 100");
let high =100;
let low=0;
let middle=(high+low)/2;
while(number!=middle)
{
    middle=Math.floor((high+low)/2);
    if(number==middle) console.log("number achieved " +middle);
    var option = readline.question("is the no greater than "+middle+" ? "+ "yes/no");
    if(option=="yes")
    {
        low=middle;
    }
    else high=middle;
}

//3.)
function headsOrTails(){
    let toss = Math.floor(Math.random()*10)%2;
    if(toss == 0 )
    return "Heads";
    return "Tails";
}
let headCount=0;
let tailCount=0;
while(headCount<11 && tailCount<11){
    var toss = headsOrTails();
    if(toss=="Heads")headCount++;
    else tailCount++;
    console.log("heads : " +headCount + " tails : " +tailCount);
}
if(headCount==11)console.log("head count=11");
if(tailCount==11)console.log("tail count=11");

//4.)
const WIN=1;
let money=2;
let noOfWins=0;
let noOfBets=0;
while(money!=4 && money!=0){
var game = Math.floor(Math.random()*10)%2;
if(game==WIN) {
    money++;
    noOfWins++;
}
else{
money--;
}
noOfBets++;
}
console.log("no of wins : " +noOfWins);
console.log("no of bets : " +noOfBets);
