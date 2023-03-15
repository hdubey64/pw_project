let obj = { id: 101, name: "Vishal", salary: 25000 };

let emp = new Object();
emp.id = 102;
emp.name = "Shashank";
console.log(emp);
console.log(obj);

function Emp(i, n, s) {
   this.id = i;
   this.name = n;
   this.salary = s;
}

const e = new Emp(104, "Sakshi", 40000);
console.log(e);
console.log(emp.id);
console.log(emp["name"]);

emp.salary = 15000;
emp["id"] = 105;
console.log(emp);
