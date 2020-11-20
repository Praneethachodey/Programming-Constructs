
//1)
var randoms = new Array();
function randomNos()
{
for(let i=0;i<10;i++){
    var no = Math.floor(Math.random()*900)+100;
    randoms.push(no);
}
}
randomNos();
console.log(randoms);

function secondLargest(){
let max=0;
for(let i =0;i<randoms.length;i++){
    if(max<randoms[i]) max= randoms[i];
}
let second=0;
    for(let j =0;j<randoms.length;j++){
        if(second<randoms[j] && randoms[j]!=max) second= randoms[j];
    }
    return second;

}
function secondSmallest(){
    let min=Number.MAX_VALUE;
    for(let i =0;i<randoms.length;i++){
        if(min>randoms[i]) min= randoms[i];
    }
    
    let second=1000;
    for(let j =0;j<randoms.length;j++){
        if(second>randoms[j] && randoms[j]!=min) second= randoms[j];
    }
    return second;
}
console.log("second largest : " + secondLargest());
console.log("second smallest : " +secondSmallest());

//2)
randoms.sort();
console.log("largest = " + randoms[8] + "\nsmallest = " + randoms[1]);

//3)
function isPrime(n){
    let i =1;
    while(i<Math.floor(Math.sqrt(n))){
        if(n%i==0)
            return false;
        i++;
    }
    return true;
}
var primes=new Array();
function prime(n){
    let i =2;
    while(i<=Math.floor(Math.sqrt(n))){
        if(n%i==0 && isPrime(i) ){
            primes.push(i);
            if(isPrime(n/i)) primes.push(n/i);
        }
        i++;
    }
}
prime(16);
console.log(primes);

//5)
var repeat = new Array();
function repeating(){
    for(let i=1;i<=100;i++){
        if(i%10 == Math.floor(i/10))
        repeat.push(i);
    }
}
repeating();
console.log(repeat);
