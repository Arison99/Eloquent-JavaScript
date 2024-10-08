//Defining a function in Js

const square = function(x) {
    return x * x;
};

console.log(square(12));

//Function that lists no parameters
const makeNoise = function() {
    console.log("Pling!");
};

makeNoise();

//Function with two parameters
const roundTo = function(n, step) {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
};

console.log(roundTo(23, 10));


//Nested Scope( Functions inside other functions)
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += 's';
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };                       //lexical binding
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};


//Functions as values
let launchMissiles = function() {
    missileSystem.launch("now");
};
if (safeMode) {
    launchMissiles = function() { /*do nothing*/ };
};


//Function declarations
console.log("The future says:", future());

function future() {
    return "You'll never have flying cars";
}


//Arrow functions
const roundTo = (n, step) => {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
};

//Arrow function with no params
const horn = () => {
    console.log("Toot");
};

//Example on call stack
function greet(who) {
    console.log("Hello " + who);
}
greet("Arison99");
console.log("Bye");