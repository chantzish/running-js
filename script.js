/*
//ex.1
var age = prompt("what is your age?");
alert('you ' + (age > 18 ? "can" : "can't") + " have a drink");
//ex.2
var citizenship = prompt("what is your citizenship?");
var allow = (citizenship === "Israeli");
alert('you ' + (allow ? "can" : "can't") + " pass");
//ex.3
var gender = prompt("what is your gender?");
var age = prompt("what is your age?");
if(age <18){
    alert("you can't have a drink");
}
else if(gender === "female"){
    alert("you can have a free drink");
}
else{
    alert("you can have a drink but you have to pay");
}
// ex.opt
//2
var citizenship = prompt("what is your citizenship?");
var allow = (citizenship.toLowerCase() === "israeli");
//3
var gender = prompt("what is your gender?");
var age = prompt("what is your age?");
if(age <18){
    alert("you can't have a drink");
}
else if(gender.toLowerCase() === "female"){
    alert("you can have a free drink");
}
else{
    alert("you can have a drink but you have to pay");
}
*/

var i;
var string;
for(i=1;i<21;i++){
    string=""
    if ( i%3 === 0) string += "fizz";
    if ( i%5 === 0) string += "buzz1";
    if ( i%3 != 0 && i%5 != 0) string += i;
    console.log(string);
}

