// //Task 1: using 'this' inside object method
// const user = {
//   name: "Sandesh", 
//   login: function () {
//     console.log(`Hello, I am ${this.name}`);
//   }
// }
// user.login();

// //Task 2: using .bind()
// class Vehicle {
//   constructor(model, color) {
//     this.model=model;
//     this.color=color;
//     this.drive=this.drive.bind(this);
//   }

//   drive() {
//     console.log(`The ${this.model} is ${this.color}.`);
//   }
// }
// const vehicle = new Vehicle("Ford","red");
// setTimeout(vehicle.drive, 1000);

// // Task 3: 
// import { fakeAPI } from "./config.js";
// console.log(fakeAPI);

// //Task 4: importing functions
// import { formatCurrency } from "./util.js";
// import { generateRandomId } from "./util.js";
// import { getTodayDate } from "./util.js";
// formatCurrency(100);
// generateRandomId();
// getTodayDate();

// //Task 5: classes
// class Product {
//   constructor(name,price) {
//     this.name=name;
//     this.price=price;
//   }
//   getInfo() {
//     console.log(`This ${this.name} costs Rs ${this.price}.`);
//   }
// }
// const myProduct = new Product("pen",50); 
// myProduct.getInfo();

// //Task 6: extending a new class foodProduct
// class foodProduct extends Product {
//   constructor(name,price,expiryDate) {
//     super(name,price);
//     this.expiryDate=expiryDate;
//   }
//   getInfo() {
//     console.log(`${this.name} costs Rs ${this.price}, and will expire on ${this.expiryDate}.`);
//   }
// }
// const myFoodProduct = new foodProduct("Apple",150,"25th December");
// myFoodProduct.getInfo();

// //Task 7: function that returns a promise that resolves after 2 secs
// function appSettings() {
//   return new Promise ((resolve,reject)=>{
//     setInterval(()=>{
//       const settings = {
//         theme: "dark",
//         language: "english"
//       };
//       resolve(settings);
//     }, 2000)
//   })
// }
// appSettings().then((settings)=>console.log("App settings: ",settings));

//Task 8: async/await fetching mock data
function fetchUsers() {
  return new Promise ((resolve,reject)=>{
    setTimeout(() => {
      const users = ["Connor","Kara","Marcus"];
      resolve(users);
    }, 1000);
  })
}
async function showUsers() {
  const users = await fetchUsers();
  console.log("Users:", users);
}
showUsers();