const { read } = require('fs');

//1.) 
var myArgs = process.argv;
{
let number = myArgs[2];
let no=2;
for(let i=1;i<=number;i++)
{
    no=no*2;
    console.log("2 ^ " + i  +" = "+no );
}
}

//2.)
{
    let number = myArgs[3];
    let harmonicNo=0;
for(let i=1;i<=number;i++){
    harmonicNo+= 1/i;
}
console.log(harmonicNo);
}

//3.)
const readline = require('readline-sync');
var number = readline.question("enter a no ");
 var prime = primeCheck(number);
 console.log(prime);
 
function primeCheck(number){
    for(let i=0;i<Math.floor(number/2);i++){
        if(number%i==0)
        return "not prime";
    }
    return "prime";
}

//4.)
var range = [1,4];
    for(let i = range[0];i<=range[1];i++){
        if(primeCheck(i)=="prime")
        console.log(i + " is a prime no ");
    }

//5.)
var input = readline.question("enter the number to find factorial ");
let factorial=1;
for(let i =1;i<=input;i++)
{
    factorial*=i;
}
console.log(factorial);

//6.)
var input = readline.question("enter the no to find factors ");
for(let i=1;i<=Math.sqrt(input);i++){
    if(input%i==0){
        console.log(i+ " "+ input/i);
    }
}






