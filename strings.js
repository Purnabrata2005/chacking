const name = "Purnabrata";
const repoCount = 50;

// console.log(name + repoCount +" Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("BGMI-Game-com");

console.log(gameName[0]);
console.log(gameName.__proto__); //when use proto use _*2
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("G"));

const newString = gameName.substring(0, 3);
console.log(newString);

const anotherString = gameName.slice(-8, 3); //negativ value is used in slice not substring
console.log(anotherString);

const newStringOne = "   Purna   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.con/hitesh%20Choudury";

console.log(url.replace("%20", "-"));

console.log(url.includes("another"));
console.log(url.includes("hitesh"));

console.log(gameName.split("-")); //split in  Array
