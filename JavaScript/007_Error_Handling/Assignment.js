// // Q. 1 Write a function called convertToNumber that takes a string as an argument and returns the equivalent number. If the string cannot be converted to a number, the function should return the string "Invalid number".Use error handling in javascript to achieve this output.

// const convertToNumber = (string) => {
//    try {
//       let result = parseInt(string);

//       if (result.toString() === "NaN") {
//          throw new Error("err");
//       }
//       return result;
//    } catch (error) {
//       return "Inavlid Number";
//    }
// };

// let string = "abcd";

// console.log(convertToNumber(string));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Q.2 Create a function called getPerson that takes an object as a parameter representing a person's name and age. The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>". However, if the parameter is not a valid object with the properties "name" and "age", the function should throw an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error message if it occurs.

// let getperson = (person) => {
//    try {
//       if (typeof person !== "object" || !person.name || !person.age) {
//          throw new Error("Invalid Prameter Type");
//       }
//       return `Name: ${person.name}, age:${person.age}`;
//    } catch (error) {
//       return error.message;
//    }
// };

// console.log(getperson({ name: "Vishal", age: 26 }));
// console.log(getperson({ name: "Vishal" }));
// console.log(getperson({ name: "Vishal" }));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Q.3 Create a class called Car with three properties: company, model, and year. The class should have a method called getDescription that returns a string in the format "This is a <year> <company> <model>". Instantiate an instance of the Car class and call the getDescription method.

// class Car {
//    constructor(c, m, y) {
//       (this.company = c), (this.model = m), (this.year = y);
//    }
//    getDiscription() {
//       return `This is a ${this.year} ${this.company} ${this.model}.`;
//    }
// }

// const myProduct = new Car("Skooda", "Rapid", 2023);
// console.log(myProduct.getDiscription());

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Q.4 Create a class called Employee with three properties: name, position, and salary. The class should have a method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and call the getSalary method.

class Employee {
   constructor(n, p, s) {
      (this.name = n), (this.position = p), (this.salary = s);
   }

   getSalary() {
      return `${this.salary}`;
   }
}

const employee1 = new Employee("Ashutosh", "Jr Develaper", 25000);
console.log(employee1.getSalary());

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Q.5

class Person {
   constructor(n = "Unknown", a = 0) {
      (this.name = n), (this.age = a);
   }
   getDetails() {
      return `Name: ${this.name}, Age: ${this.age}`;
   }
}

const person1 = new Person("Vishal", 26);
console.log(person1.getDetails());

const person2 = new Person();
console.log(person2.getDetails());

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Q.6 Create a class called Calculator with a static method called add. The add method should take two numbers as arguments and return their sum. Instantiate the Calculator class and call the add method.
class Calculator {
   static add(a, b) {
      return a + b;
   }
}

let sum = Calculator.add(3, 4);

console.log("sum", sum);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Q.7 Create a class called User with properties username and password. Implement a getter method for password that returns the password with all characters replaced by asterisks. Implement a setter method for password that checks if the new password is at least 8 characters long and contains at least one number and one uppercase letter. If the password is valid, set the new password. If not, log an error message.

// class User {
//    #password;
//    constructor(u, p) {
//       this.username = u;
//       this.#password = p;
//    }
//    get password() {
//       return this.#password.replace(/./g, "*");
//    }

//    setPassword(p) {
//       if (p.length < 8 || !/\d/.test(p) || !/[A-Z]/.test(p)) {
//          console.log(
//             "Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter."
//          );
//       } else {
//          this.#password = p;
//       }
//    }
// }

// const user = new User("Mithun", "Password123");
// console.log(user.password);

// user.setPassword("Password");
// user.setPassword("password123");

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Q.8 Create a prototype object called Student with a property name. Add a method called printDetails to the prototype that logs the string "Hello, my name is {name}" to the console. Instantiate a Student object with the name "Mithun" and call the printDetails method.
const studentPrototype = {
   printDeatails() {
      console.log(`Hello, the student is ${this.name}!`);
   },
};

class Student {
   constructor(name) {
      this.name = name;
   }
}

Object.assign(Student.prototype, studentPrototype);
const student = new Student("Vishal");
student.printDeatails();

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Q.8  Create a numberChecker function that takes an array of numbers as an argument and returns a function.There turned function should take another number as an argument and return true if the number is in the array, and false otherwise.

// function numberChecker(arr) {
//    const set = new Set(arr);
//    return function (num) {
//       return set.has(num);
//    };
// }

// const myArr = [1, 2, 3, 4, 5, 6];
// const checkNum = numberChecker(myArr);

// console.log(checkNum(3));
// console.log(checkNum(7));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Q.8 Write a function that takes an array of products and returns a function that filters the array by a given product category. The function must filter an eCommerce products array by a specific category. The closure filters products using the filter() method. Finally, it returns a new array containing only the products with the same category as the input.

let products = [
   { name: "Shirt", category: "Clothing" },
   { name: "Pants", category: "Clothing" },
   { name: "Hat", category: "Accessories" },
   { name: "Sunglasses", category: "Accessories" },
];

function filterByCategory(arr) {
   return function (category) {
      return arr.filter(function (arr) {
         return arr.category === category;
      });
   };
}

var clothingProducts = filterByCategory(products)("Clothing");
console.log(clothingProducts);
