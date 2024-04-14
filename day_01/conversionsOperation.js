let score=33 //data type number 
console.log(typeof score)


score="33" //the value is changed in score 
console.log(typeof score)


// now we want to change the type of data 
let number=Number(score)
console.log(typeof number)
console.log(score)



// if score is "33abc" it return NaN value  //NaN is not a number  
// if score is null it give 0 value 
// if score is undefined it give Nan
// if score is true/false it give 1/0

//example
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);



// *****************************************operation *****************************************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);      => 12
// console.log(1 + "2");      => 12
// console.log("1" + 2 + 2);  => 122
// console.log(1 + 2 + "2");  => 32

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);        => 1
// console.log(+"");          => 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;       //inc the value by 1 
console.log(gameCounter);

