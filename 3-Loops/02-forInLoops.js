/****************
FOR IN LOOPS
****************/

//* Great for iterating over values in an object

let student = {
    name: 'Peter',
    awesome: true,
    degree: 'JavaScript',
    week: 1
}

for (item in student) {
    console.log('item =>', item);
    console.log('student[item] =>', student[item]);    
}

let dogArray = ['collie', 'pitbull', 'newfie', 'dachsound', 'shiba inu'];
for (dog in dogArray) {
    console.log(dog);
}

/* Challenge: Write a for loop that capitalizes the first letter of a student's name
*/
/*
let studentName = 'pAuL';
let newName = '';

for (letter in studentName) {
    if (letter == 0) {
        newName += studentName[letter].toUpperCase();
        //console.log(studentName[letter], newName);
    } else {
        newName += studentName[letter].toLowerCase();
        //console.log(studentName[letter], newName);
    }
    //console.log(letter, studentName[letter]);
}
console.log(newName);
*/

let studentName = 'pAuL';
let newName = '';

for (let i=0; i<studentName.length; i++) {
    if (i == 0) {
        newName += studentName[i].toUpperCase();
        //console.log(studentName[letter], newName);
    } else {
        newName += studentName[i].toLowerCase();
        //console.log(studentName[letter], newName);
    }
    //console.log(letter, studentName[letter]);
}
console.log(newName);
