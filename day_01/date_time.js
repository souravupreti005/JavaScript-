// Dates

let myDate = new Date()
console.log(myDate.toString());  // ==>Tue Apr 16 2024 15:15:42 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());// ==>Tue Apr 16 2024
console.log(myDate.toLocaleString()); // ==>4/16/2024, 3:15:42 PM
console.log(typeof myDate); //object

let myCreatedDate = new Date(2023, 0, 23)    //year,month,date
console.log(myCreatedDate.toDateString());  //==> Mon Jan 23 2023   month started with 0 
let myCreatedDatee = new Date("01-14-2023")
console.log(myCreatedDatee.toLocaleString()); // ==>1/14/2023, 12:00:00 AM



let myTimeStamp = Date.now() 

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})