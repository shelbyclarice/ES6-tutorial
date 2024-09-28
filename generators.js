// For a loop

// Example
const colors = ['red', 'green', 'blue'];

for (let color of colors) {
    console.log(color);
}

// Example
const numbers = [1,2,3,4];

let total = 0;
for (let number of numbers) {
    total += number;
}


// Generators - function that can enter and exit multiple times. When run some code, return a value, and then go right back into the function at the same place we left it.
function numbers() {

}

// Turn it into a generator by adding *
function* numbers() {
    
}

// Another way
function *numbers() {
    
}
const gen = numbers();
gen.next(); // {"done":false}
gen.next(); // {"done":true}



// Going to the store and getting grocieries
function *shopping() {
    // stuff on the sidewalk

    // walking down the sidewalk

    // go into the store with cash
    const stuffFromStore = yield 'cash'; // yeild - Transistion from the sidewalk to the store with cash

    // if want to make a stop before going home, make a yield statment - walking wot laundry place
    const cleanClothes = yield 'laundry';

    // walking back home 
    return [stuffFromStore. cleanClothes];
}

// stuff in the store
const gen = shopping();
gen.next(); // leaving our house
// walked in to the store
// walking up and down the aisles..
// purchase our stuff

// .next means transistion from the store and back to sidewalk (re-enter our gen at the yield statement)
// grocieries is assigned to stuffFromStore
gen.next('groceries'); // leaving the store with groceries
gen.next('clean clothes');


// can use generators to iterate through any data structure that we want.
// Simple example using generators
function* colors() {
    yield 'red';
    yield 'blue';
    yield 'green';
}

const gen = colors();
gen.next(); // {"value":"red","done":false}
gen.next(); // {"value":"blue","done":false}
gen.next(); // {"value":"green","done":false}
gen.next(); // {"done":true}

// for of loop
const myColors = [];
for (let color of colors()) {
    myColors.push(color);
}
myColors;


// Delegation of Generators
// Object called engineeringTeam - within it is testingTeam
const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill',
    // Symbol Iterator = tool that teaches objects how to respond to the for of loop
    [symbol.iterator]: function* () {
        yield this.lead; // this - is a reference to the testingTeam - testingTeam.Amanda
        yield this.tester;
    }
};

const engineeringTeam = {
    testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineering: 'Dave',
    [symbol.iterator]: function* () {
        yield this.lead;
        yield this.manager;
        yield this.engineering;
        yield* this.testingTeam; 
    }
};

// Iterator Function
// gen with an aurgument of (team)


    /* function* TeamIterator(team) {
        yield team.lead;
        yield team.manager;
        yield team.engineer;
            // Called a second generator passing in the testing team
            // TAKING OUT THIS LINE WITH SYMBOL ITERATOR 
            // const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
            // yield* testingTeamGenerator; // Now will have 5 // ["Jill","Alex","Dave","Amanda","Bill"]
            // Replace above line now with this
        yield* team.testingTeam; // Will get same result with 5 names
} */ // Now take this code out

// Second gen that has two yield statments
// WITH SYMBOL ITERATOR NO LONGER NEED TESTINGTEAMITERATOR
 /* function* TestingTeamIterator(team) {
        yield team.lead;
        yield team.tester;
} */

// Just engineeringTeam
const names = [];
for (let name of TeamIterator(engineeringTeam)) {
    names.push(name);
}
names; // 3 // ["Jill","Alex","Dave"]

// Delegating from the engineering team to the testing team
// Have a single for loop for both teams - combining TestingTeam and EngineeringTeam
const names = [];
for (let name of TeamIterator(engineeringTeam)) {
    names.push(name);
}
names; // 3 // ["Jill","Alex","Dave"]



// Practical example of creating a tree data structure then iterating through it using symbol.iterator
class Comment {
    constructor(content, children) {
        this.content = content;
        this.children = children;
    }

    *[symbol.iterator]() {
        yield this.content;
        for (let child of this.children) {
            yield* child;
        }
    }
}

// Currently has no children of there own
const children = [
    new Comment('good comment', []),
    new Comment('bad comment', []),
    new Comment('meh', [])
];
// tree is the root node that has 3 children (above)
const tree = new Comment('Great post!', children);

const values = [];
for (let value of tree) {
    values.push(value);
}
values; // List of all the comments there

// Array helpers such as map and for each do not work with gens


