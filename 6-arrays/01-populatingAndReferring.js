let list = ['orange', 'banana', 'oreos'];
console.log(list[1]) //banana

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['John', 'Eric', 'Sam']];
//console.log(typeof students); //object
//console.log(students instanceof Array); //true
//console.log(students[1]); //Marshall
//console.log(students[3]); //Ray

//Challenge:
// Go into the nested array and get 'Sam'
//print out 'Hello Sam, how are you today?'

let name = students[6][2];
console.log(`Hello ${name}, how are you today`);

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

//food.push('Cool Beans');
//food.splice(1, 1, 'Cookies');
//food.pop(); //remove the last one
//food.shift() //remove the first one
//food.unshift('Pasta', 'Hamburger') //add elements at the beginning

for (f of food) {
    console.log(f);
}

for (f in food) {
    console.log(f);
    console.log(food[f]);
}


let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];
//food.forEach(f => {console.log(f)});
//food.forEach((f, number) => {console.log(f); console.log(number)});
//food.forEach((f, number, array) => {console.log(f); console.log(number); console.log(array)});

let foodFunction = () => {
    for (f in food) {
        console.log(f),
        console.log(food[f]),
        console.log(food)
    }
}
    
foodFunction();

//Challenge
// Create a list (with an array) of movies
// Use .forEach() to list your movies
// Add another movie at the end
// And replace one of your existin movies with another one

let movies = ['Rambo', 'Rambo II', 'Rambo III', 'Rambo IV'];
//movies.forEach(movie => {console.log(movie)});
//movies.push('Rambo V');
movies.splice(2, 3, 'Gremlins');
movies.forEach(movie => {console.log(movie)});   

let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(long.length);

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
//console.log(colors.length)
//console.log(colors.toString());

//console.log(colors instanceof Array);
//console.log(typeof colors);
//console.log(typeof colors.toString())

colors.forEach(c => console.log(c));

//Challenge
//First check if ou are working with an array
//Then flip the values within the array (what was an index 4 is now in 0, 3 to 1, etc.)
//Using a method only, print the values of the newly arranged array

let arr = [1, 2, 3, 4, 5];

if (arr instanceof Array === true) {
    let revArr = arr.reverse();
    //revArr.forEach(a => console.log(a))
    console.log(revArr);
}
