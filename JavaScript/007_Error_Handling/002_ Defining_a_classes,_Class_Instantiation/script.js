// class Product {
//    //properties ➡️ variables ➡️ data member
//    name;
//    price;
//    rating;

//    // bahaviours ➡️ function ➡️ member function

//    display() {
//       console.log("Displaying the current product");
//    }
// }

// // const p = new Product();
// // console.log(p);
// // p.display();
// console.log(Product);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class Person {
   // constructor
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }
   greet() {
      console.log(
         `Hello, my name is ${this.name} and I am ${this.age} year old`
      );
   }
}

const person1 = new Person("Vishal", 26);

person1.greet();
