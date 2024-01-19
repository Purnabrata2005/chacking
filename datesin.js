//Dates in js

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString()); //date in string
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate);

let myCreatedDate = new Date(2024, 0, 7); //in js month start from 0 and //the format is (yyyy-MM-dd)
console.log(myCreatedDate.toDateString());

let myCreatedDateOne = new Date(2024, 0, 7, 5, 3);
console.log(myCreatedDate.toLocaleString());

let myCreatedDateTwo = new Date("01-12-2024"); //for (mm-dd-yyyy) in this formate month start from 01
console.log(myCreatedDateTwo.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDateTwo.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate =new Date()

console.log(newDate);
console.log(newDate.getMonth() +1);
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday: "long",
    // timeZone:''
})
