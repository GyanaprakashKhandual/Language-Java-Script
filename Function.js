// Function Declaration
/*
function greet() {
    return 'Hi Chris'
}

console.log(greet());
*/

// Function expression
/*
const greet = function() {
    return 'Hi Gyana';
}

console.log(greet());
*/

// Arrow function
/*
const greet = () => {
    return 'Hello World';
}

console.log(greet());
*/

// Immediately Invoked Functions Expression
/*
(function(name) {
    console.log(`Hello ${name}`);
}) ('Thor');
 */

// Functions Generator
/*
function* idGenrator() {
    let id = 1;
    while(true) {
        yield id++;
    }
}

const gen = idGenrator();
console.log(gen.next().value);
*/

// Parameters and Arguments
/*
function greet (name = 'Greet') {
    console.log(`Hello ${name}`);
}
greet();
*/

// Reset Parameters
/*
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
sum(1, 2, 3);
*/

// Arguments Object
/*
function showArgs() {
    console.log(arguments);
}

showArgs(1, 'f', true);
*/

// Destructuring Parameters
/*
function printUser({name, age}) {
  console.log(`${name} is ${age} years old`);
}

const user = {name: "Alice", age: 25};
printUser(user);
*/

// Scope and closures
/*
function outer() {
    const outerVar = 'I am outside';

    function inner() {
        console.log(outerVar);
    }
    inner();
}
outer();
*/