
// function syntax
/*function function_name(){

}*/
function sourav(){
    console.log("s")
    console.log("o")
    console.log("u")
    console.log("r")
    console.log("a")
    console.log("v")
}
sourav();
function addTwoNumber(a,b){ //a,b are parameters 
    return a+b;
}

const check=addTwoNumber(3,null); //3,null are arguments 
console.log(check);
console.log(typeof check);
function userLogin(username){
    return `${username} just login`;
}
 console.log(userLogin("sourav"))


//  if-else
function user(username){
    if(username === undefined){
        return "please enter the username"
    }
    return `${username} just login`;

}
console.log(user(""))


function calculateCartPrice(...num){    // ...is a REST OPERATOR 
    return num

}
let price=calculateCartPrice(200,400,300)
console.log(price);


const obj={
    username:"sourav",
    price:200
}
function objectPass(anyobject){
    return `username is ${anyobject.username} and price is ${anyobject.price}`
}
console.log(objectPass(obj));

const array=[200,333,232]
function arrayCheck(getarray){
    return getarray[1];
}
console.log(arrayCheck(array));
