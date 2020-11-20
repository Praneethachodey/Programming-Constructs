//1)
var dice = new Map([[1,0],[2,0],[3,0],[4,0],[5,0],[6,0]]);
while(!(Array.from(dice.values()).includes(10))){
var rolled = Math.floor(Math.random()*6)+1;
console.log(rolled);
dice.set(rolled,dice.get(rolled)+1);
}
for(let [key,value] of dice) if(value==10) console.log("no rolled 10 times is : " +key);
var sorted = Array.from(dice.values()).sort(function(a,b) { return a-b;});
var min = sorted[0];
for(let [key,value] of dice) if(value==min) console.log("no rolled " +min+ " times is : " +key);

//2)
var months= new Map([[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],[12,0]]);
for(let i=0;i<50;i++){
    var bday = Math.floor(Math.random()*12)+1;
    months.set(bday,months.get(bday)+1);
}
var month=["jan","feb","march","april","may","june","july","aug","sept","oct","nov","dec"];
for(let [key,value] of months) 
    console.log("ppl in " + month[key-1] + " are : " + value);



