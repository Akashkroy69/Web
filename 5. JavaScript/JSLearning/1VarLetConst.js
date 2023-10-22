// var : using this we can create variables with global scope. But be careful.
// case 1:
// When you declare a variable with var in the global scope (outside of any function), it is indeed accessible globally:
var a = 10;
console.log(a); // This works


// case 2:
// When you declare a variable with var inside a function, it is not accessible in the global scope, as it has local function scope:
function test() {
    var b = 12;
 }
 
 //console.log(b); // This will result in an error, as 'b' is not defined in the global scope.

//  case 3: 
function example() {
    if (true) {
        var x = 10;
    }
    console.log(x); // Outputs 10, even though 'x' was declared inside the if block.
}
// why this is working?, isn't x a local var?
// answer: In JavaScript, variables declared with var have function scope, not block scope.
// Despite being declared within the if block, x is hoisted to the function scope, making it 
// accessible throughout the example function.

console.log("=====let==========");
let c = 10;
console.log(c)
 
const d = 22;