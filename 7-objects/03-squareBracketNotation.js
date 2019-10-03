//* Square Bracket Notation

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
};

//console.log(garden.vegetable);

let x = 'vegetable';
//console.log(garden.x); //undefined, its looking for an x key
console.log(garden[x]); //brackets notation checks before the existence

let baking = {}; //nothing to see here but an empty object
//baking.zucchini = 'better make some bread';
baking['zucchini'] = 'better make some bread';
//console.log(baking)

// console.log(baking.garden.vegetable); //This will not work
// console.log(baking) // {zucchini: 'better make some bread'}
// console.log(garden['vegetable']); // 'zucchini'
// console.log(baking[garden['vegetable']]); //'better make some bread
// console.log(baking['zucchini']); // better make some bread

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
};

let key = 'water';
//Object.keys(garden) //it will return an array
Object.keys(garden).forEach(g => {
//    console.log(g);
    if(g===key) {
        console.log(garden[key]);
    }
}); 


