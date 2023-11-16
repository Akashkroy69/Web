
// You can create an array in JavaScript by enclosing a list of values within 
// square brackets [] or by using the Array constructor.
const fruits = ["apple", "banana", "cherry"];
const numbers = new Array(1, 2, 3, 4, 5);

console.log(fruits)
console.log(numbers)
console.log(fruits[0]); // "apple"
console.log(numbers[2]); // 3
// METHODS
// length
console.log(fruits.length); // 3
// .push(element): Adds an element to the end of the array and returns the new length of the array.
fruits.push("grape");
console.log(fruits); // ["apple", "banana", "cherry", "grape"]

// joins
console.log(fruits.join("__"))


// .pop(): Removes and returns the last element of the array.
const lastFruit = fruits.pop();
console.log(fruits); // ["apple", "banana", "cherry"]
console.log(lastFruit); // "grape"

// unshift(element): Adds an element to the beginning of the array and returns the new length.
fruits.unshift("strawberry");
console.log(fruits); // ["strawberry", "apple", "banana", "cherry"]

// .shift(): Removes and returns the first element of the array.
const firstFruit = fruits.shift();
console.log(fruits); // ["apple", "banana", "cherry"]
console.log(firstFruit); // "strawberry"

// .concat(array2): Combines two or more arrays and returns a new array.
const vegetables = ["carrot", "lettuce"];
const combined = fruits.concat(vegetables);
console.log(combined); // ["apple", "banana", "cherry", "carrot", "lettuce"]
// .slice(start, end): Creates a new array by extracting a portion of the original array from start to end-1.
const sliced = fruits.slice(1, 3); // Extracts elements at indices 1 and 2
console.log(sliced); // ["banana", "cherry"]


