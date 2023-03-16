let nameOfSports = ["Football" , "Cricket" , "Kabadi" , "tennis"];
let sports =" ";
nameOfSports.forEach(listOfSports);
//for ( i = 0;i < nameOfFriends.length; i++)
document.getElementById("names").innerHTML = sports;
function listOfSports(item , index){
    sports += index + ": " + item + "<br>";
}