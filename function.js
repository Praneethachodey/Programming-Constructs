const readline = require('readline-sync');
//1.)
let choice = readline.question("enter the scale you want to convert from");
switch(choice){
    case 'C':
        var temp= readline.question("enter the temp");
        while(toCheckTemp(temp)){
        temp = readline.question("enter the correct temp");
        }
        let degF=(temp*9/5)+32;
        console.log(degF);
        break;
    case 'F':
        var temp= readline.question("enter the temp");
        while(toCheckTemp(temp)){
        temp = readline.question("enter the correct temp");
        }
        let degC=(temp-32)*5/9;
        console.log(degC);
    }
function toCheckTemp(temperature){
  switch(choice){
      case 'F':
       if(temperature>212 || temperature<32){
        return true;
    }
      case 'C':
    if(temperature<0 || temperature>100){
    return true;
    }
  }
  return false;
}

//2.)
function palindrome(one,two){
   return ( reverseANo(two)== one );   
}
function reverseANo(two){
    let reverse=0;
    while(two!=0){
        let last = two%10;
        reverse=reverse*10 + last;
        two = Math.floor(two/10);
    }
    return reverse;
}
console.log(palindrome(12345,54321));

//3.)
function primeCheck(number){
    for(let i=0;i<Math.floor(number/2);i++){
        if(number%i==0)
        return "not prime";
    }
    return "prime";
}
var no = readline.question("enter the no to check if its palindrome is a prime");
if(primeCheck(no)){
    if(primeCheck(reverseANo(no)))
    console.log("its palindrome is a prime");
    else console.log("its palindrome is not a prime");
}else console.log("it is not a prime no ");

       