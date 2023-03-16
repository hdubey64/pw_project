let emp = {
   id: 105,
   name: "John Doe",
   age: 26,
};
//Object ke key ko extract karna
let keys = Object.keys(emp);
console.log(keys);

//Object ke Values ko extract karna

let values = Object.values(emp);
console.log(values);

//Object ke keys aur Values dono ko ek sath extract karna

let entries = Object.entries(emp);
console.log(entries);

//Object ke property ko change karna
emp.age = 27;
console.log(emp);

// want to Stop updatetion of property in Object
// Object.freeze(emp);
// emp.id = 110;
// console.log(emp);

// want to Stop Emtry Or  Remove of property in Object
// Object.seal(emp);
emp.id = 110;
emp.address = "random";
delete emp.name;
console.log(emp);

// want to create new object with using of old object key pair value
let newEmp = Object.assign({ x: 50 }, emp);
console.log(newEmp);
