const user = {
   username: "Vishal",
   email: "hdubey64@gmailAccount.com",
};

const { username, email } = user;

// const myArray = [{

// }]

let pwCourse = {
   coursename: "pw1",
   price: 1299,
   getCourseDetails: function () {
      console.log(
         `Course name is ${this.coursename} and price is ${this.price}`
      );
   },
};

Object.prototype.hitesh = function () {
   console.log("Visha Dubey");
};

Array.prototype.heyHitesh = function () {
   console.log(`Object revisin Class`);
};

pwCourse.getCourseDetails();
pwCourse.hitesh();

// Prototyple Inhiratains

const aNewString = "Shashank";
aNewString.hitesh();
aNewString.heyHitesh();

pwCourse.heyHitesh();



const User1 ={
    coursename = "pw2",
    price: 1299

}
const User2 ={
   email: "hdubey64@gmail.com"

}

const user3 ={
    isLoggedIn: true
}

const user4 ={
    support: "JS course"
    // _proto_: User1
}
// User4._proto_ = User1

Object.getPrototypeOf(user4, User1)