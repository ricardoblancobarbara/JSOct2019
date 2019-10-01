//Boolean
// boolean can represent: true/false, yes/no, on/off

let i = true;
let j = false;

console.log(i);

//Null
// null = empty value. It is not 0, not undefined.
// It is like an empty container; nothing is in it, but it still exists a space to fill

let empty = null;
console.log(empty);

//Undefined
// undefined = no value assigned. Not even an empty container.
// undefined is NOT an error

let undef = undefined; //never do this;
console.log(undef);

let grass;
console.log(grass); //undefined;

//Numbers
let degrees = 90;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

//Strings
// Strings are datatypes used to represent text and are wrapper in either single or double quotes

let stringOne = "double quotes";
let stringTwo = 'single quotes';

console.log(stringOne, stringTwo);

let first = 1050 + 100;
let second = '1050' + '100';

console.log(first);
console.log(second);

console.log(typeof first);
console.log(typeof second);

let third = 1050 + '100';
console.log(third);
console.log(typeof third); //string

//Objects

let car = {
    color: 'red',
    tires: 4,
    extras: 'A/C and Radio',
    cool: true,    
}

console.log(car);
console.log(typeof car);

//Arrays
// Arrays are containers that hold lists of items;

let lists = ['item1', 'item2', 'item3'];
//    (1)  (2) (3)

//1-name of the array;
//2-square brackets = array;
//3-each item, regardless of datatype, is separated by commas.

let gracerylist = ['milk', 'apples', 'cereal'];
console.log(grocerylist);
console.log(typeof grocerylist); //object

//Addition vs concatenation
//check out JS coer


/* 
Challenge: 
Set 7 (or 8) variables:
firstName
lastName
houseNumber
aptNumber (if applicable)
street
city
state
zipcode

Set each variable to its respective type.

console.log your whole address (with the space between variable).
*/

var firstName = 'Ricardo';
var lastName = 'Blanco';
var houseNumber = 13715;
var aptNumber = null;
var street = 'Cunningham Dr';
var city = 'Carmel';
var state = 'IN';
var zipcode = 46074;

console.log(houseNumber + ' ' + street + ', ' + aptNumber);
console.log(city + ', ' + state + ', ' + zipcode);

//Strings - Properties
/*
Properties are qualities associated with a dataType
Strings have properties associated with that string
E.g. the lenght of a string is a property
*/

let myname = 'Ricardo Blanco';
console.log(myName.lenght);

//Methods
//Methods are tools that can help us manipulate our data
//* .property = no parentheses;
//* .methods() = parentheses;

let myNameIs = 'Ricardo';
console.log(myNameIs, toUpperCase());

let home = 'My home is indianapolis';
console.log(home.includes('indianapolis'));

//Challenge: Use Google, find MDN documentation for Strings,research and use the split method to get an array back from this string

let sent = 'This sentence will be split into individual parts';
console.log(sent.split(' '));













