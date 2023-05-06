// class Product {
//    #rating;
//    constructor(n, p, r) {
//       (this.name = n), (this.price = p), (this.#rating = r);
//    }
//    static custom() {
//       console.log("Calling a static method");
//    }
//    //    getRating() {
//    //       console.log(this.#rating);
//    //    }
//    get ratingGetter() {
//       console.log(this.#rating);
//    }

//    set ratingSetter(r) {
//       if (r < 0) return;
//       this.#rating = r;
//    }
//    //    setRating(r) {
//    //       if (r < 0) return;
//    //       this.#rating = r;
//    //    }

//    display() {
//       console.log(
//          "Displaying the current product",
//          this.name,
//          this.price,
//          this.#rating
//       );
//    }
// }

// const p = new Product("Iphone", 34500, 5);

// console.log(p);
// p.name = "Sumsung s23";
// console.log(p.name);
// p.setRating(15);
// p.getRating();

// p.display();
// Product.custom();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class Person {
   #name;
   #age;

   constructor(name, age) {
      this.#name = name;
      this.#age = age;
   }

   // Getter for name property
   get name() {
      return this.#name;
   }

   // setter for name property
   set name(name) {
      if (typeof name !== "string" || name.trim().length === 0) {
         throw new Error("Name must be a non-empty string");
      }
      this.#name = name.trim();
   }

   // Getter for age Property
   get age() {
      return this.#age;
   }

   // Setter for age Property
   set age(age) {
      if (typeof age !== "number" || age < 0 || age > 120) {
         throw new Error("age must be between 0 to 120");
      }
      this.#age = age;
   }
}

let person1 = new Person("Vishal Dubey", 26);
console.log(person1.name);
console.log(person1.age);

// Modify name and age using setters
person1.name = "Ashutosh";
person1.age = 23;
console.log(person1.name);
console.log(person1.age);

// Attempt to set invalid name and age
// person1.anme = "";
// console.log(person1.name);
//"Throws an error: "Name must be a non-empty string"

person1.age = -10;
console.log(person1.age);
//"Throws an error: "Name must be a non-empty string"
