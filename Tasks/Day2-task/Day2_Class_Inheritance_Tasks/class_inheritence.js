//Task 1, 2, 3
class Vehicle {
  constructor(model,color) {
    this.model=model;
    this.color=color;
  }

  drive() {
    console.log(`${this.model} drives with four wheels.`);
    console.log(`${this.model} is of ${this.color} color.`);
  }
}
let myVehicle = new Vehicle("Ford","Black");
myVehicle.drive();

//Task 4, 5: inheriting class 'vehicle' and overriding 'drive()'
class Bike extends Vehicle {
  drive() {
    console.log(`${this.model} drives with two wheels.`);
    console.log(`${this.model} is of ${this.color} color.`);
  }
}
let myBike = new Bike ("Royal Enfield","Red");
myBike.drive();

//Task 6, 7: creating class 'student' and adding marks property
class Student {
  constructor(marks) {
    this.marks=marks;
  }

  result() {
    console.log(`He has scored ${this.marks} in his exams.`);
  }
}
const myMarks = new Student("50");
myMarks.result();

//Task 8, 9: inheriting Programmer and using 'super' to parent method 'work()'
class Employee {
  constructor(role,shift) {
    this.role=role;
    this.shift=shift;
  }

  work() {
    console.log(`${this.role}'s shift is on ${this.shift}.`);
  }
}

class Programmer extends Employee {
  work() {
    super.work();
  }
}
const myWork = new Programmer("Developer","Day");
myWork.work();

//Task 10: creating multiple child classes
class Manager extends Employee {
  constructor(role,shift,experience) {
    super(role,experience);
    this.experience=experience;
  }
  work() {
    super.work();
    console.log(`The manager has ${this.experience} years of experience.`);
  }
}
const managerDetails = new Manager("Manager","Morning","15");
managerDetails.work();