//Remaining Task 1
import { person } from "./export.js";
console.log(`Hi this is ${person}`);

//Task 3: importing a function
import { firstFun } from "./export.js";
firstFun("Sandesh");

//Task 5: importing a default variable
import person2 from "./export.js";
console.log(`How do you feel ${person2}?`);

//Remaining Task 6: importing multiple variables
import { person3, person4 } from "./export.js";
console.log(`${person3} and ${person4}`);

//Task 7: renaming default variable from task 4 while importing
import Person2 from "./export.js";
console.log(Person2);

//Remaining Task 8: importing a class
import { myDetails } from "./export.js";
const tempVar = new myDetails ("Sandesh","Suryabinayak");
tempVar.greet();

//Remaining task 9: importaing an object
import { car } from "./export.js";
console.log(`I have a ${car.brand} car of ${car.launchDate} model.`);

//Task 10: importing everything using '*'
import * as userDetails from "./export.js";
console.log(userDetails);