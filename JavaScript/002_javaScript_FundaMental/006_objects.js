//What are Objects

const person = {
   firstName: "Vishal",
   lastName: "Dubey",
   age: 25,
   address: {
      city: "Lucknow",
      state: "Utter Pardesh",
      country: "India",
      zip: "226016",
   },
};

// Accessing property using dot . notetion
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.address.city);
console.log(person.address.state);
console.log(person.address.country);

// Accessing property using bracket
console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person["age"]);
console.log(person["address"]["city"]);
console.log(person["address"]["state"]);
console.log(person["address"]["country"]);

// Adding a new property to the object
person.fatherName = "Anil kumar Dubey";
console.log(person.fatherName);

// Updating property in object
person.age = 26;
console.log(person.age);
console.log(person.address.city);
console.log(person.address.state);
console.log(person.address.country);

// Deleting property from object
delete person.fatherName;
console.log(person.fatherName);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//How are Objects different from variables

// Declearing and assinging a variable
let num = 10;

// Declearing and assinging an object
const person2 = {
   firstName: "Vishal",
   lastName: "Dubey",
   age: 25,
   address: {
      city: "Lucknow",
      state: "Utter Pardesh",
      country: "India",
      zip: "226016",
   },
};

//+++++++++++++++++++++++++++++++++++++++++++++

//Updating the value of variable
num = 20;

//Updating the value of proprty
person2.age = 36;

//+++++++++++++++++++++++++++++++++++++++++++++

// logging a variable
console.log(num); // 20

// logging an Object
console.log(person2.firstName); // Vishal
