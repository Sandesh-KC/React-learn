// //Task 1: create promise that resolves
// const assignmentStatus = new Promise((resolve)=>{
//     const assignmentDone = true; 
//     if (assignmentDone) {
//       resolve("Assignment is complete.");
//     }
// })

// //Task 2: create promise that rejects
// const assignmentStatus = new Promise((reject)=>{
//     const assignmentDone = false; 
//     if (assignmentDone) {
//       reject("Assignment is complete.");
//     }
// })


// //Task 3, 4: use .then() and .catch()
// assignmentStatus
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(()=> {
//     console.log("Assignment status check finished.");
//   })

//Task 5, 6: convert to async/await, and waiting 2 seconds
function assignmentStatus() {
  return new Promise ((resolve)=>{
    setTimeout(()=> {
      resolve("Assignment is complete.");
    }, 2000)
  })
}
async function displayStatus() {
  const status = await assignmentStatus();
  console.log(status);
}
displayStatus();

//Task 7, 9: create function that returns promise, and chaining promises
function foodOrder() {
  return new Promise ((resolve, reject)=>{
    resolve("Order ready.");
  })
}
function foodEat() {
  return new Promise ((resolve, reject)=>{
    resolve("Food ready to eat.");
  })
}
async function foodStatus() {
  try {
    const order = await foodOrder();
    const eat = await foodEat();
    console.log(order);
    console.log(eat);
  } catch (error) {
    console.log(error);
  }
}
foodStatus();

//Task 9: use await inside async function, and using multiple awaits
async function displayPlaceholder() {
  const userData = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const dataStatus = await ("User data loading...");
  console.log(userData);
  console.log(dataStatus);
}
displayPlaceholder();