const obj={
    name:"sourav",
    price:99,
    welcomeMessage: function(){
        console.log(`${this.name}, welcome to the website`) //This ===> it is  refer current contest
        console.log("inside the block ",this);
    }

}
obj.welcomeMessage()
obj.name="gaurav"
obj.welcomeMessage()
console.log("outside the block ",this);

// this ====> it is not use in function
// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

const chai= () =>{
    let username = "hitesh"
    console.log(this);
}
chai();

// this is implicit return 
const addTwo = (num1, num2) =>  num1 + num2 //in implicit return not use of return keyword 
console.log(addTwo(4,6))

// const addTwo = (num1, num2) => ( num1 + num2 )



//NOTE:-> IF WE USE {} CURLY BRACES THEN NEED RETURN KEY WORD 
//     -> IF WE USE ()BRACKET THEN NO NEED OF RETURN KEY WORD
  




// function function_name(){

// }

// ()=>{}
// function(){

// }