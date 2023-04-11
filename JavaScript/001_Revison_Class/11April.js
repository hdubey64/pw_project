//amazon shopping cart

// function cartBillTotal(...numbers) {
//    //take a variable total
//    let total = 0;
//    //loop all value and keep adding to total
//    for (const num of numbers) {
//       total += num;
//    }
//    //return total
//    return total;
// }

// const user = {
//    id: "123",
//    name: "Vishal",
//    email: "hdubey64@gmail.com",
// };

// function addUser(obj) {
//    console.log(`A user name ${obj.name} got an email ${obj.email}`);
// }

// addUser(user);

function addTwoNumber(num1, num2) {
   return num1 + num2;
}

const addTwoNumber2 = (num1, num2) => {
   return num1 + num2;
};

const addTwoNumber3 = (num1, num2) => num1 + num2;

const addTwoNumber4 = (num1) => 5;

const addTwoNumber5 = (num1) => ({ email: "hdubey64@gmail.com" });

const addTwoNumber6 = (num1, num2) => ({ email: "hdubey64@gmail.com" });

function learning() {
   console.log(this);
}

const learningTwo = () => {
   console.log(this);
};

learning();
learningTwo();
