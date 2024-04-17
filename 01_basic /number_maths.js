const score = 400
console.log(score); // =>400

const balance = new Number(100)
console.log(balance);   // => [Number: 100]

console.log(balance.toString().length);  //first convert to the string  then calculate the length byt length func
console.log(typeof balance) //main variable not change 
console.log(balance.toFixed(5)); // ==>100.00000 decimals value 


const otherNumber = 123.8966

console.log(otherNumber.toPrecision(5));//return string value enter how many digit you want   ==>123.90


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  //comas is use ==>10,00,000


// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));
console.log(Math.random())  //value btw 0 to 1

console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)