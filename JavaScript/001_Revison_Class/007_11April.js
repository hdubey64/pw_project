// function sayHello() {
//    console.log("Hello World");
//    console.log("Hitesh");
// }

// sayHello();

// function addTwoNum(num1, num2) {
//    let result = num1 + num1;
//    return result;
// }
// function subtractTwoNum(num1, num2) {
//    let result = num1 - num2;
//    return result;
// }

// // const result = addTwoNum(4, 4);
// // console.log(result);

// console.log(subtractTwoNum(5, 4));

// function ragisterUser(user) {
//    return user ? user + " is register at PW" : "Please pass the Username ";
// }

// console.log(ragisterUser("Vishal"));
// console.log(ragisterUser());

//Amazon shopping cart

// function cartBillTotle(...numbers) {
//    //take a varible total
//    let total = 0;
//    //loop all value
//    for (const num of numbers) {
//       total += num;
//    }
//    //return
//    return total;
// }

// const user = {
//    id: "123",
//    name: "Vishal",
//    email: "Vishal@pw.live",
// };

// function addUser(obj) {
//    console.log(`A user name ${obj.name} got an email ${obj.email}`);
// }

// addUser(user);

// function addTwoNumber(num1, num2) {
//    return num1 + num2;
// }

// const addTwoNumV2 = (num1, num2) => {
//    return num1 + num2;
// };

// const addTwoNumV3 = (num1, num2) => num1 + num2; //Implicit return

// const addTwoNumV4 = (num1) => 5; //Implicit return

// const addTwoNumV5 = (num1) => 5;

// const email = (email) => ({ email: "rohit@pw.live" });

function learning() {
   console.log(this);
}

const learningTwo = () => {
   console.log(this);
};

learning();
learningTwo();
