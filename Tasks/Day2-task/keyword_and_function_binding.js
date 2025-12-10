//Task 1: using 'this' keyword
const student = {
  Name: "Sandesh",
  Semester: "3rd",
  greet: function() {
    console.log(`Hello this is ${this.Name}`);
  }
}
student.greet();

//Task 2
// const car = {
//   Model: "Ford",
//   launchDate: 2025,
//   abtCar: function() {
//     console.log(`${this.Model} was launched on ${this.launchDate}`);
//   }
// }
// const abtCar2 = car.abtCar;
// abtCar2();

//Task 3: using 'bind' keyword
const car = {
  Model: "Ford",
  launchDate: 2025,
  abtCar: function() {
    console.log(`${this.Model} was launched on ${this.launchDate}`);
  }
}
const abtCar2 = car.abtCar.bind(car);
abtCar2();

//Task 4: creating two objects and using bind()
const obj1 = {
  Name1: "Rajesh Hamal",
  show: function() {
    console.log("He is "+this.Name1);
  }
}
const obj2 = {
  Name1: "Jaoqin Pheonix",
  show: function() {
    console.log("He is "+this.Name1);
  }
}
const firstObj = obj1.show.bind(obj1);
const secondObj = obj2.show.bind(obj2);
firstObj();
secondObj();

//Task 6: creating function in strict mode and using "this"
