//Task 1: exporting and importing a variable
export const person = "Sandesh";

//Task 2: exporting a function
export const firstFun = (name)=> {
  console.log(`Hello, this is ${name}`);
}

//Task 4: exporting default variable
const person2 = "Connor";
export default person2;

//Task 6: exporting multiple variables
export const person3 = "Kara";
export const person4 = "Marcus";

//Task 8: exporting a class
export class myDetails {
  constructor(name,address) {
    this.name=name;
    this.address=address;
  }
  greet() {
    console.log(`Hi, this is ${this.name} from ${this.address}.`);
  }
}

//Task 9: exporting an object
export const car = {
  brand: "Hyundai",
  launchDate: 2025
}