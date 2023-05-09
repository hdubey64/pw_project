let myHeros = ["Thor", "Spiderman"];
let dcHeros = ["Batman", "Flash", "Superman"];

// let heroPower = {
//    thor: "Hammer",
//    spiderman: "Sling",

//    getSpidermanPower: function () {
//       console.log(`Spiderman power is${this.spiderman}`);
//    },
// };

// Object.prototype.hitesh = function () {
//    console.log(`Hitesh is persent in all object`);
// };

// console.log(myHeros.hitesh());
// console.log(heroPower.hitesh());

// Array.prototype.heyHitesh = function () {
//    console.log(`Hitesh says hi`);
// };

// console.log(myHeros.heyHitesh());
// console.log(heroPower.heyHitesh());

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const User = {
   name: "top name",
   email: "top@gmail.com",
};

const Teacher = {
   makeVideoa: true,
};

const TeacherSupport = {
   isAvailable: false,
};

const TAAssistant = {
   makeAssignment: "JS Assignment",
   fulltime: true,
   __proto__: TeacherSupport,
};

//+++++++++++++++++++++++++++++++++++++++++++++++++++

//Old Method

// Teacher.__proto__ = User

// TAAssistant.isAvailable;

// console.log(TAAssistant);

//+++++++++++++++++++++++++++++++++++++++++++++++++++

//Modern Method

Object.setPrototypeOf(TeacherSupport, Teacher);

//+++++++++++++++++++++++++++++++++++++++++++++++++++

//True Length App

String.prototype.trueLength = function () {
   console.log(`True length is ${this.trim().length}`);
};

"Vishal.       ".trueLength();
"Shashank.             ".trueLength();
