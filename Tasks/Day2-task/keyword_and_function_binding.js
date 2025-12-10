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
function strictFun() {
  "use strict";
  const obj3 = {
    name2: "Marcus",
    detroit: function() {
      console.log(`I am ${this.name2}`);
    }
  };
  const thirdObj = obj3.detroit.bind(obj3);
  thirdObj();
}
strictFun();

//Task 7: 'this' does not work in arrow function
const obj4 = {
  name3: "connor",
  secondDetroit: ()=> {
    console.log(`It was meant to be ${this.name3}`);
  }
};
obj4.secondDetroit();

//Task 8: using 'this' in a nested object
const obj5 = {
  name4: "Kara",
  details: {
    species: "Android",
    age: 30,
    detKar: function() {
      console.log(`She is ${this.species} and ${this.age} years old model.`);
    }
  },
  showDetails: function() {
    console.log(`This is ${this.name4}.`);
  }
};
obj5.showDetails();
obj5.details.detKar();

//Task 9: using .call() to borrow method
const person = {
  name5: "Michael",
  gta: function(item) {
    console.log(item + " this is "+ this.name5);
  }
};
person.gta("Hello");
const person2 = {
  name5: "Franklin"
}
person.gta.call(person2, "Hi");

//Task 10: using .apply() to borrow method
const person3 = {
  name6: "Kratos",
  gow: function(message, title) {
    console.log(`${message}, ${this.name6} the ${title}.`);
  }
};
person3.gow("Hello", "God");
const person4 = {
  name6: "Loki"
}
person3.gow.apply(person4, ["Hi", "Demigod"]);