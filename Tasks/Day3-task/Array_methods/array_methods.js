//Task 1: 
const num1 = [1,2,3,4,5];
const newNum1 = num1.map(
  (element)=>{
    return element*2;
  }
);
console.log(newNum1);

//Task 2:
const num2 = [1,2,3,4,5,6];
const evenNums = num2.filter(
  (element)=>{
    return element%2 == 0;
  }
);
console.log(evenNums);

//Task 3:
const num3 = [10,20,30,40];
const sum = num3.reduce(
  (accumulatedValue, currentValue)=>{
    return accumulatedValue + currentValue;
  }, 0
);
console.log(sum);

//Task 4: find only returns the first element matching the given condition
const user = [
  {name:"Ram", age:20},
  {name:"Hari", age:15},
  {name:"Marcus", age:25}
];
const newUser = user.find(
  ({age})=> {
    return age > 18;
  }
);
console.log(newUser);

//Task 5:
const fruits = ["apple", "banana", "orange"];
fruits.forEach(
  (element, index)=> {
    console.log(`${element} has ${index} index.`);
  }
);

//Task 6: using map() to extract only names from user object
const users = [
  {name:"Kara", age:20},
  {name:"Connor", age:25}
];
const updatedUsers = users.map(
  ({name})=>{
    return name;
  }
);
console.log(updatedUsers);

//Task 7: 
const products = [
  {name:"shirt", price:500},
  {name:"book", price: 1000},
  {name:"pen", price: 50}
];
const filteredProducts = products.filter(
  ({price})=> {
    return price<100;
  }
);
console.log(filteredProducts);

//Task 8:
const num4 = [50,20,2,50,98,32];
const maxNum4 = num4.reduce(
  (accumulatedValue,currentValue)=> {
    if (currentValue>accumulatedValue){
      return currentValue;
    } else {
      return accumulatedValue;
    }
  }
);
console.log(maxNum4);

//Task 9:
const userDetails = [
{name:"Sam", age:20}, 
{name:"John", age: 17},
{name:"Arthur", age:30}
];
const newUserDetails = userDetails.filter(({age})=> {
  return age>18;
}).map(({name})=>{
  return name.toUpperCase();
});
console.log(newUserDetails);

//Task 10:
const items = ["Apple", "Banana", "Orange"];
let htmlElement = "<ul>"; 
items.forEach(
  (element)=> {
    htmlElement += `<li>${element}</li>`;
  }
);
htmlElement += "</ul>";
document.querySelector('.js-div').innerHTML = htmlElement;