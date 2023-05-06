class Product {
   //properties ➡️ variables ➡️ data member
   //    name;
   //    price;
   //    rating;
   #rating;
   constructor(n, p, r) {
      //   console.log("Calling the constructor");
      (this.name = n), (this.price = p), (this.#rating = r);
      //return 10; // if you're returning primitive then it will be avoided in constructor
      //return { x: 10, y: 14 }; // if you're returning non primitive then it will be returned
   }
   static custom() {
      console.log("Calling a static method");
   }

   // bahaviours ➡️ function ➡️ member function
   display() {
      console.log(
         "Displaying the current product",
         this.name,
         this.price,
         this.#rating
      );
   }
}

const p = new Product("Iphone", 34500, 5); // new ➡️ creates an empty plain object
// In the above piece of code we are calling the constructor methode

console.log(p);
p.name = "Sumsung s23";
console.log(p.name);
p.display();
Product.custom();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//BluePrint with Function

// function Product(n, p, r) {
//    (this.name = n), (this.price = p), (this.rating = r);
// }

// const p = new Product("mackbook", 200000, 5);
// console.log(p);
// let x = {
//    p: Product,
// };
// x.p("airpods", 2000, 5);
// console.log(x);
/*
 * 1. this keyword in js deffrent than other lanhgauges
 * 2. this keyword refers to the context from where we called
 *
 * in the unction constructor also
 * -if you return primitive it is ignored and we return the object referd by this
 * if you return acustom ob, then the custom  obj is return
 * if you don't return anything, ten object referred by this is returend
 */

// const Product = function (n, p, r) {
//    (this.name = n), (this.price = p), (this.rating = r);
// };

// const p = new Product("Iphone", 10000, 5)

// console.log(p)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const Product = (n, p, r) => {
//    (this.name = n), (this.price = p), (this.rating = r);
// };

// const p = new Product("Iphone", 10000, 5);

// console.log(p);

/*
 *The theory of this keyword pointing  to calling context is not applicable with arrow function
 */
