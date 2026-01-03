//Task 1: Write a higher-order function repeat(action, times) that calls action function "times" times.
function action() {
  console.log("hello there");
}
function repeat(action, times) {
  for (let i=1; i<=times; i++) {
    action();
  }
}
repeat(action, 2);

//Task 2: Create a function operate(arr, fn) that applies fn to each element using map.
const nums = [1,2,3,4,5];
function fn(n) {
  return n*5;
}
function operate(arr, fn) {
  return arr.map(fn);
}
console.log(operate(nums, fn));

//Task 3: Write a function filterBy(arr, conditionFn) that returns filtered array using the provided condition.
function conditionFn(n) {
  return n>=3;
}
function filterBy(arr, conditionFn) {
  return arr.filter(conditionFn);
}
console.log(filterBy(nums, conditionFn));

//Task 4: Create a higher-order function logger(fn) that logs "before" and "after" calling fn.
function fn1() {
  console.log("I am Baymax.");
}
function logger(fn1) {
  console.log("Name loading...");
  fn1();
  console.log("Name loaded.");
}
logger(fn1);

//Task 5: Write a function createAdder(x) that returns a new function adding x to its argument.
function createAdder(x) {
  return function (n) {
    return n + x;
  }
}
const add = createAdder(5);
console.log(add(10));

//Task 6: Create a higher-order function sortBy(arr, key) that sorts array of objects by given key.
const users = [
  {name: "kara", age: 25},
  {name: "connor", age: 20}, 
  {name: "marcus", age: 23}
];
function sortBy(arr, key) {
  return arr.sort(
    (a, b) => {
      return a[key] - b[key];
    }
  );
}
console.log(sortBy(users, "age"));

//Task 7: Write a function pipeline(...functions) that chains multiple functions (apply one after another).
function fun1() {
  console.log("Name: Sandesh");
}
function fun2() {
  console.log("Address: Bhaktapur");
}
function pipeline(...functions) {
  functions.forEach((element)=>{
    return element();
  });
}
pipeline(fun1, fun2);

//Task 8: Create a higher-order function withTax(taxRate) that returns a function to add tax to price.
const withTax = (taxRate) => (price) => price + ((taxRate/100)*price);
const tax = withTax(2);
console.log("Price including tax: ", tax(30000));

//Task 9: Write a function debounce(fn, delay) that delays function execution (basic version).
const message = ()=> "Hello";
function debounce(fn, delay) {
  setTimeout(
    ()=> {
      ressult = fn();
      console.log(ressult);
    }, delay
  );
}
debounce(message, 2000);

//Task 10: Create a higher-order function memoize(fn) that caches results of expensive pure functions.
function square(num) {
  return num*num;
}
function memoize(fn) {
  const cache = {};
  return function(arg) {
    const result = fn(arg);
    cache[arg] = result;
    console.log("Cache: ", cache);
    return result;
  }
}
const memoSquare = memoize(square);
console.log(memoSquare(2));