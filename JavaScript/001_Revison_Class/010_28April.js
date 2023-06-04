const user = {
   iserName: "hitesh",
   email: "hitesh@google.com",
};

const { userName, emai } = user;

const myArray = [
   {
      userName: "shoaib",
      email: "shoab@google.com",
   },
   {
      userName: "Vishal",
      email: "vishal@google.com",
   },
   {
      userName: "Govind",
      email: "govind@google.com",
   },
];

myArray.map((e) => {
   console.log(e.userName);
});

let pwcourse = {
   coursename: "pw1",
   price: 1299,

   getCourseDetails: function () {
      console.log(
         `course name is ${this.coursename} and price is ${this.price}`
      );
   },
};

Object.prototype.hitesh = function () {
   console.log(`Hitesh was here`);
};

pwcourse.getCourseDetails();
pwcourse.hitesh();
myArray.hitesh();

const anewString = "Shashank";
anewString.hitesh();

Array.prototype.heyHitesh = function () {
   console.log("Object Revision Class");
};

// pwcourse.heyHitesh(); NO
myArray.heyHitesh(); //YES
// anewString.heyHitesh(); NO

const User1 = {
   coursename: "pw2",
   price: 1399,
};
const User2 = {
   email: "something@ex.com",
};
const User3 = {
   isLoggedIn: true,
};
const User4 = {
   support: "js course",
   //    __proto__: User1 old
};

// User4.__proto__ = User1 old

Object.getPrototypeOf(User4, User1);

console.log(User4.coursename);
