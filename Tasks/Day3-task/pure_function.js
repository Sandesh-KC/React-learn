//Task 1: pure function that returns product
const multiply = (a,b) => a*b;
console.log(multiply(2,3));

//Task 2: 
function getFullname(firstName, lastName) {
  return (firstName+" "+lastName);
}
console.log(getFullname("Sandesh", "KC"));

//Task 3:
function isEven(num) {
  if(num%2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(2));

//Task 4: a function to capitalize first letter of a string
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize("hello"));

//Task 5: 
const PI = 3.14;
function calculateArea(radius) {
  return PI * radius * radius;
}
console.log("Area of circle: ", calculateArea(5));

//Task 6: function to get initials of name
function getInitials(firstName, lastName) {
  console.log(firstName.charAt(0)+"."+lastName.charAt(0)+".");
}
getInitials("Sandesh", "KC");

//Task 7:
function fahrenheitToCelsius(f) {
  let celsius = (f-32)*(5/9);
  console.log(celsius);
}
fahrenheitToCelsius(100);

//Task 8:
function reverseString(str) {
  let arrayString = str.split("");
  let revString = arrayString.reverse();
  let newString = revString.join("");
  return newString;
}
console.log(reverseString("Hello"));

//Task 9:
function findMax(arr) {
  let max = arr[0];
  arr.forEach((element)=>{
    if (element>max) {
      max = element;
    }
  });
  return max;
}
console.log(findMax([1,2,9,3,5]));

//Task 10:
function formatDate(year, month, day) {
  return (`${day}/${month}/${year}`);
}
console.log("Date:",formatDate(2025, 12, 28));