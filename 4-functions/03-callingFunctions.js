//* Calling Functions

function hi() {
    console.log('Hi');
    return 'HI';
}

hi(); // invoking/calling my funuction

/*
Challenge:
Create a function that, when invoked, lists out the numbers 1 to 10
*/

function numbers() {
    for(i=1; i<=10; i++) {
        console.log(i);
    }
}
numbers();

/*
Challenge:
Given the array, create a function that lists out the values individually
*/

let arr = ['This', 'is', 'really', 'cool'];

function list() {
    for(i=0; i<arr.length; i++) {
        console.log(arr[i]);
    }
}
list();