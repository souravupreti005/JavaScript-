const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
console.log(gameName.__proto__);




// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2)); //value at 2nd index 
console.log(gameName.indexOf('t')); //index value of t

const newString = gameName.substring(0, 4) //make a new string and it only work on positive index
console.log(newString);

const anotherString = gameName.slice(-8, 4)  //make a new string and it only work on both positive,negative  index
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); // remove the space on both side 

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) //https://hitesh.com/hitesh-choudhary

console.log(url.includes('sundar'))//check the word  

console.log(gameName.split('-')); //split the array and make a arrays [ 'hitesh', 'hc', 'com' ] 

// string function:->
// 1. str.toUpperCase(); to convert into upper case
// 2. str.toLowerCase(); to convert into lowet
// let str="   apnacollege    js     ";
// console.log(str.trim())    startr and end space 
// str.slice(start,end);
// str.concat(str2);
// str.replace("h","y");
// str.charAt(0);