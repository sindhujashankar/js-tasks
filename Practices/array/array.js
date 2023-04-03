//Array replacement
const names = ["Sindhuja", "Sency", "Amirtha"];
names[2] = "Preethi";
console.log(names);
console.log(names.length);
// console.log(names.pop());
console.log(names.push());
console.log(names.splice(1));
names.forEach(console.log);
names.forEach((item, index, array) => {
  console.log(item, index, array);
});
console.log("------------------------------------------------");

//mix Of values
let array = [
  "Sindhuja",
  { place: "ooty" },
  function () {
    console.log("Hello");
  },
];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

//get last element with "at"

let collegeName = ["RTC", "PSG", "SSN"];
console.log(collegeName[collegeName.length - 1]);
console.log(collegeName.at(-2));
console.log(collegeName.at(2));
console.log(collegeName.shift());
console.log(collegeName.unshift());
console.log("------------------------------------------------");

const states = ["TamilNadu", "Kerala", "Karnateka", "Maharashtra"];
console.log(states.pop());

let district = ["chennai"];
let districts = district;
console.log(district == districts);
districts.push("Nilgiri's");
console.log(district);
console.log(districts);
console.log("------------------------------------------------");

//forEach
//arr.forEach(function(item, index, array)
let fruits = ["Apple", "Orange", "Apple"];

console.log(fruits.indexOf("Apple"));
console.log(fruits.lastIndexOf("Apple"));

//indexof, lastIndexOf , includes
let arr = [1, 0, false, 1];

console.log(arr.indexOf(0));
console.log(arr.indexOf(false)); // 2
console.log(arr.indexOf(null)); // -1
console.log(arr.includes(1));
console.log(arr.lastIndexOf(1));

//find and findIndex/findLastIndex
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];
let user = users.find((index) => index.id == 2);
console.log(user.name);

//filter
const age = [12, 54, 52, 85, 44, 16, 80];
function checkAdultUser(age) {
  return age >= 18;
}
console.log(age.filter(checkAdultUser));

//sort()

const numbers = [5, 9, 45, 12, 63, 23, 32];
let result = numbers.reduce((sum, current) => sum + current); //reduce
let solution = numbers.reduceRight((sum, current) => sum + current);
console.log(numbers.sort());
console.log(numbers.reverse());
console.log(result);
console.log(solution);

//split and join
let namesB = "sindhuja, jency, amirtha";
let userA = namesB.split(", ");
for (let names of userA) {
  console.log(`${names} is good person`);
}
