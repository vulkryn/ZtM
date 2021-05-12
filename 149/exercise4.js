//Solve these problems:

//#1 Create a one line function that adds adds two parameters

const add = (x, y) => x+y;

//Closure: What does the last line return? Closure: function ran, executed, will never execute again, but it will remember there are references to the variables, so child scope always has access to parent scope
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3) //13

//Currying: What does the last line return? Convert function from one taking multiple parameters to one taking only one.  Currying makes functions more extensible
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1) //31


//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12) //17

//Composing: What does the last line return?  Make one function that the output of one function is the input of another
//so an example of the f(g(a)) in java would be like roundUp(generateFloat())
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10) //so, add1(10) = 11 and add5(11) = 16

//Side effects and functional purity
/*
let a = 1;
const b = () => a=2;
b changing the a outside the function scope is a side effect
*/

//What are the two elements of a pure function?
/*
Deterministic: no matter what, the same output will be produced when given the same inputs
2. No side effects: It must only depend on its input elements.
*/