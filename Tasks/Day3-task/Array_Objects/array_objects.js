//Task 1: 
const colors = ["red", "blue", "white", "black", "orange"];
console.log(colors[2]);

//Task 2: 
const book = {
  title: "Meditation",
  author: "Marcus Aurellius",
  pages: 500,
  publishedYear: "1500 AD"
};

//Task 3: adding new key in task 2 immutably
const updatedBook = {
  ...book,
  isRead: true
};

//Task 4:
const studentDetails = [
  {name:"Ram", grade: "A"},
  {name:"Hari", grade: "B"},
  {name:"Sita", grade: "C"}
];

//Task 5:
const company = {
  name: "HoneyTech",
  location: "Suryabinayak",
  employees: ["Kara", "Marcus", "Connor"]
};

//Task 6:
const numbers = [10, 20, 30];
const updatedNumbers = numbers.map(
  (element)=> {
    return element+5;
  }
);
console.log(updatedNumbers);

//Task 7:
const car = {
  brand: "Porche",
  model: "x11h"
};
const updatedCar = {
  ...car,
  color: "black"
};

//Task 8:
const shoppingList = ["pant", "shirt", "shoes"];
const newShoppingList = ["books", ...shoppingList];

//Task 9:
const profile = {
  name: "Connor", 
  role: "Senior developer", 
  address: {
    country: "Nepal", 
    city: "Bhaktapur"
  }
};

//Task 10:
const products = [
  {name: "book", price: 500, deliveryCharge: 100},
  {name: "shoes", price: 4000, deliveryCharge:200}
];
const filteredProducts = products.map(
  ({name, price})=>{
    return {name, price};
  }
)
console.log(filteredProducts);