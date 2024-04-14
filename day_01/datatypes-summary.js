// primitive datatype(call by value)(call by value mean passed a copied value)
/*Primitive Datatypes
Number => number
String  => string
Boolean  => boolean
null  => object
undefined  =>  undefined
Symbol  =>  symbol
BigInt  =>  bigint */

/*reference=>non primitive
Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object */
const score = 100
const scoreValue = 100.3
       
const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);=>false  
 
let y=BigInt("123"); 
// last mei n aajta hai


const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
