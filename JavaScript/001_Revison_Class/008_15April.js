const obj1 = {
   name: "Vishal",
   role: "Student",
   isLoggedIn: true,
   registerUser: function () {
      console.log(`${this.name} is a ragister user`);
   },
};

const obj2 = {
   10: "number10",
   20: "number20",
};

const key1 = Symbol("key1");
const key2 = Symbol("key2");

console.log(key1);
console.log(key2);

const obj3 = {
   [key1]: "Vishal",
   [key2]: "PW Skill",
};

console.log(obj3);
console.log(obj3[key1]);
console.log(obj3[key2]);

const obj4 = new Object();
obj4.email = "vishal@pw.com";

const obj5 = {
   name: "Vishal",
   email: "vishal@pw.com",
   isLoggedIn: true,
};
obj5.email = "vishal@pwSkill.com";
obj5["isLoggedIn"] = false;

console.log(obj5);
console.log(Object.keys(obj5));
console.log(Object.values(obj5));
