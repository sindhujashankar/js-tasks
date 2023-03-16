//  program to convert first letter of a string to Uppercase
//function toUpperCase(name){
let nameOfPerson = prompt("Enter your Name: ")
let firstLetter =  nameOfPerson.charAt(0).toUpperCase() + nameOfPerson.slice(1);

document.getElementById("firstletter").innerHTML = firstLetter;
