// Variable Declarations in JavaScript
// Using var (Function Scoped, Can Re-declare, Can Reassign)

var username = "Chris";
console.log("Initial var:", username); // Output: Chris

var username = "Gyana"; // Re-declaration is allowed
console.log("Re-declared var:", username); // Output: Gyana

username = "Cassi"; // Re-assignment is allowed
console.log("Re-assigned var:", username); // Output: Cassi

// Using let (Block Scoped, Cannot Re-declare in Same Scope, Can Reassign)

let city = "Jajpur";
console.log("Initial let:", city); // Output: Jajpur

// let city = "Cuttack";  Error: Identifier 'city' has already been declared

city = "Bhubaneswar"; //  Re-assignment is allowed
console.log("Re-assigned let:", city); // Output: Bhubaneswar


// Using const (Block Scoped, Cannot Re-declare or Reassign)


const panCard = "PCJPK1612N";
console.log("Const value:", panCard); // Output: PCJPK1612N

// panCard = "ABCD1234E"; Error: Assignment to constant variable
// const panCard = "XYZ123456"; Error: Already declared

// Must be initialized at declaration time
// const aadhar; Error: Missing initializer


// No keyword (Not recommended — becomes global implicitly)

accountEmail = "gyan@google.com"; // Not declared with var/let/const
console.log("Implicit global:", accountEmail); // Output: gyan@google.com

// -------------------------------------------
// Hoisting Example
// -------------------------------------------

// var is hoisted (declared but initialized with undefined)
console.log("Hoisted var:", hoistedVar); // Output: undefined
var hoistedVar = "I'm hoisted";

// let/const are hoisted but not initialized (Temporal Dead Zone)
try {
  console.log("Hoisted let:", hoistedLet); // ReferenceError
} catch (e) {
  console.log("Hoisted let error:", e.message);
}

let hoistedLet = "I'm let";

// Scope Example


function scopeTest() {
  if (true) {
    var varInside = "I am var"; // Function scoped
    let letInside = "I am let"; // Block scoped
    const constInside = "I am const"; // Block scoped
    console.log("Inside block:", letInside, constInside);
  }

  console.log("Outside block:", varInside); // Accessible
  // console.log(letInside);  Error
  // console.log(constInside); Error
}
scopeTest();


/*
 Always use `const` if the variable should not change
 Use `let` when value will change
 Avoid `var` (it's outdated and can cause scope bugs)
 Never use undeclared variables (creates global accidentally)
*/


