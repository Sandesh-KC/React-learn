//Task 1: updating age immutably using spread operator
const user = {
  name: "marcus",
  age: 25
};
const updatedUser = {
  ...user,
  age:26
};
console.log(updatedUser);

//Task 2: 
const hobby = ["football", "sketching", "swimming"];
const updatedHobby = [...hobby, "coding"];
console.log(updatedHobby);

//Task 3: removing last element of array immutably
const hobbyAfterDelete = updatedHobby.slice(0,-1);
console.log(hobbyAfterDelete);

//Task 4: replacing second element in array immutably
const replacedHobby = hobby.map(
  (element, index)=>{
    if(index==1){
      return "singing";
    } else {
      return element;
    }
  }
);
console.log(replacedHobby);

//Task 5: changing nested property in an object immutably
const person = {
  name: "connor", 
  address: {
    city: "Bhaktapur", 
    country: "nepal"
  }
};
const newPerson = {
  ...person,
  address: {
    ...person.address,
    city: "kathmandu"
  }
};
console.log(newPerson);

//Task 6: adding new key value pair to an object immutably
const updatedPerson = {
  ...person, 
  age: 25
};
console.log(updatedPerson);

//Task 7: removing last property from object
const deletePerson = {
  ...person,
  deletedAt:5
};
console.log(deletePerson);
const {deletedAt, ...removeDeletePerson} = deletePerson;
console.log(removeDeletePerson);

//Task 8:
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [...num1, ...num2];
console.log(num3);

//Task 9:
  const user1 = {
    name: "Kara", 
    model: "Andriod"
  };
  const user1Details = {
    releaseYear: 2020
  };
  const fullDetails = {
    ...user1,
    ...user1Details
  };
  console.log(fullDetails);

  //Task 10: updating specific object in an array of object immutably (by id)
  const students = [
    {
      id: 1,
      name: "Sandesh", 
      grade: "A"
    }, 
    {
      id: 2,
      name: "Bikash", 
      grade: "A+"
    }
  ];
  console.log(students);
  const updateStudents = students.map(
    ({id,name,grade})=>{
      if (id ==1) {
        return {id, name, grade: "A+"};
      } else {
        return {id, name, grade}
      }
    }
  );
  console.log(updateStudents);