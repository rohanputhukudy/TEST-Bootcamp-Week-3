/* VARIABLES
 * Declare with `let` and can initialize to Strings, Numbers, Arrays, Booleans, and other Objects.
 * Can reinitialize to other types and place different types in the same array.
*/
let myVar = 'hello';

myVar = 5;

myVar = [3, 'wow', [-12.2]];

// Example of Object notation. Consists of `property: value` pairs
myVar = {
  "name": 'Rohan',
  "age": 22,
  classes: ['PHIL 28', 'PHIL 130', 'MATH 199H'],
};

// Can access values in objects in two different ways
myVar['age'] += 1; // won't work for the `classes` property
console.log(myVar.age);

// Objects (ex. strings) can also have functions (called methods)
let myName = "Rohan";
console.log(myName.toLowerCase());

/* Conditionals work the same way as in Java
 * Equality checking is different:
 * `==` and `!=` will cast data to the same type and then check
 * `===` and `!==` just check immediately and assume different types cannot be equal
*/
if(' ' == 0) {
  console.log('space is kinda like zero');
} else {
  console.log('space is not kinda like zero');
}
if('0' == 0) {
  console.log("'0' is kinda like 0");
} else {
  console.log("'0' is not kinda like 0");
}

// Loops are mostly the same as Java, but instead of for-each, we have for-of
const list = ['a', 'b', 'c', 'd'];
for (const item of list) {
  console.log(item);
}

/* FUNCTIONS
 * Functions do not have return or parameter types.
*/
function square(num) {
  return num*num;
}

// Can set default values for parameters, making them optional to pass
function welcome(college='Warren') {
  return `Welcome to ${college} college!`;
}

// Functions are 1st class citizens: can be passed as arguments to functions.
function apply(func, arr) {
  let newArr = []
  for (const item of arr) {
    newArr.push(func(item));
  }
  return newArr;
}

const arr = [1,2,3,4];
console.log(apply(square, arr));

/* ANONYMOUS FUNCTIONS
 * Can define functions without names using (parameter) => {returnedObject} notation.
 * Useful for passing simple functions as arguments.
*/
console.log(apply(
  (item) => item*item,
  arr
));