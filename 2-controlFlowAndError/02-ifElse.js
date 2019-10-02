/******************
IF ELSE CONDITIONAL
******************/

let weather = 75;

if (weather < 70) {
    console.log('Wear a jacket');
} else {
    console.log('No jacket necessary');
}

/*********
Challenge: 
**********

Bronze: 
Write an if else statement that checks your name; 
If it is your name, console log '<name>'
If the name does not match, console.log 'Hello, what is your name?'

Silver:
If It is your name, console log 'Hello, my name is <name>'

Gold:
If it is not your name, console log 'Hello, is your name <name here> ?'
*/

var name = 'Alex';

if (name === 'Ricardo') {
    console.log('Hello my name is ' + name);
} else {
    console.log('Hello, is your name ' + name + '?');
}

/*
? Challenge: 
**********
? Use this string - let name = 'aUTuMN';
? Bronze: 
Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string; 
If it is not console.log 'hey its not written correctly' 

? Silver:
If the first letter of a string is uppercase, only console.log that letter
if it is not, console.log the rest of the string Without the first letter, and change them to lowercase 

? Gold: 
If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/
Collapse

let name = 'aUTuMN';

if (name[0] == name[0].toUpperCase()) {
    console.log(name);
} else {
    console.log('Hey, its not written correctly');
}


let name = 'aUTuMN';

if (name[0] == name.charAt(0).toUpperCase()) {
    let firstletter = name[0] + name.slice(1).toLowerCase();
    console.log(firstletter);
} else {
    let otherletters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log(otherletters);
}

/* 
? Challenge:
? Look up the format for an Else If statement
? Set a variable age and give it an age of your choice
? Set an else if statement that convey the following:
? If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
? If the age is at least 18, console.log 'Yay! You can vote!'
? If the age is at least 21, console.log 'Yay! You can drink!'
? If the age is at least 25, console.log 'Yay! You can rent a car!'
*/
Collapse

var age = 18;

if (age <= 17) {
    console.log('Sorry, you are too young to do anything');
} else if (age < 21) {
    console.log('Yay! You can vote!');
} else if (age < 25) {
    console.log('Yay! You can drink!');
} else {
    console.log('Yay! You can rent a car!');
}



