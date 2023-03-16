let  NoOfStudents= 80;
let lexicalScope = function (){
     let present = 54;
     let absent = NoOfStudents - present;
     return absent;
}
console.log(lexicalScope());