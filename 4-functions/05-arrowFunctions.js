//* Arrow Functions

function coffee() {
    console.log('Coffee is good');    
}

let coffe1 = () => {
    console.log('I love coffe');
}

cats(1, 12);

let cats = (kitten, puppy) => {
    console.log(`I have ${kitten} cat(s) and ${puppy} dogs`)
}


//*Concise and block body

//* concise body does not need parentheses, unless you have more than one parameter

//Concise body
let apples = x => console.log(`There are ${x} apples`);
apples(10);
//*More than one parameter will require parenthese
//* Return (if one-line chunky arrow function) is implied


//block body
let apples = (x) => {console.log(`There are ${x} apples`)};
apples(20);


//* Sidenote: LINEBREAKS ARE BAD

let func = () => console.log('hi'); //ok

let func = ()
    => console.log('hi'); //bad llama
    
    