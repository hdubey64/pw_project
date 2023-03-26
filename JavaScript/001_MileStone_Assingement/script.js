//Q.001 Password validation

function validatePssword(pssword) {
   let confirmPassword = "Vishal9451@";
   if (pssword === confirmPassword) {
      return console.log("Password Validation Successfull 👍👍👍");
   } else {
      return console.log("Password validation Unsuccessfull 👎👎👎");
   }
}

validatePssword("Vishal9451@");

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Q.002 Calculator

function calculator(num1, num2, operator) {
   let result = 0;
   switch (operator) {
      case "+":
         return num1 + num2;
      case "-":
         return num1 - num2;
      case "*":
         return num1 * num2;
      case "/":
         return num1 / num2;
      default:
         return "Invalid Operator";
   }
}

const result = calculator(10, 50, "/");

console.log(result);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Q.003 Color Mixer

function colorMixer(color1, color2) {
   switch (color1) {
      case "red":
         switch (color2) {
            case "blue":
               return "purple";
            case "yellow":
               return "orange";
            default:
               return "Invalid Input of Color";
         }
      case "blue":
         switch (color2) {
            case "red":
               return "purple";
            case "yellow":
               return "green";
            default:
               return "Invalid Input of Color";
         }
      case "yellow":
         switch (color2) {
            case "red":
               return "orange";
            case "blue":
               return "green";
            default:
               return "Invalid Input of Color";
         }
   }
}

console.log(colorMixer("red", "blue"));
console.log(colorMixer("blue", "red"));
console.log(colorMixer("red", "yellow"));
console.log(colorMixer("yellow", "red"));
console.log(colorMixer("blue", "yellow"));
console.log(colorMixer("yellow", "blue"));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q. 004 Highest Marks

let marks = [50, 40, 90, 70, 65];

function highestMarks(marks) {
   let highest = 0;
   for (let i = 0; i < marks.length; i++) {
      highest = marks[i] > highest ? marks[i] : highest;
   }
   return highest;
}

console.log(highestMarks(marks));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Q.005 Capitalize
let capitalize = (myName) => {
   return myName[0] === myName[0].toUpperCase()
      ? myName
      : myName[0].toUpperCase() + myName.substring(1, myName.length);
};

console.log(capitalize("vishal"));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Q.6 Vowel Counter
let vowelCounter = (name) => {
   let vowel = ["a", "e", "i", "o", "u"];
   let counter = 0;
   for (let j = 0; j <= name.length - 1; j++) {
      for (i = 0; i <= vowel.length - 1; i++) {
         if (name[j] === vowel[i]) {
            counter++;
            break;
         }
      }
   }
   return counter;
   // console.log(i);
};

console.log(vowelCounter("Vishal dubey"));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Q.007 Remove Duplicates

function removeDuplicates(cart) {
   let newCart = [];
   for (let i = 0; i < cart.length; i++) {
      if (newCart.indexOf(cart[i]) === -1) {
         newCart.push(cart[i]);
      }
   }
   return newCart;
}

console.log(removeDuplicates(["1", "0", "1", "5", "5", "4", "2", "5"]));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Q.08 Inverted right-angled triangle pattern with asterisks

let n = 6;

let asterisks = "";

for (let i = 0; i < n; i++) {
   for (let j = 0; j < n - i; j++) {
      asterisks += "*";
   }
   asterisks += "\n";
}
console.log(asterisks);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q.009 Check for divisibility

function checkDivisibility(myArr) {
   let myArr1 = [];

   for (let i = 0; i <= myArr.length - 1; i++) {
      if (myArr[i] % 3 === 0 && myArr[i] % 2 !== 0) {
         myArr1.push(myArr[i]);
         continue;
      }
   }
   return myArr1;
}

let myArr = [10, 15, 60, 90, 21, 27, 33, 18, 17, 39];

console.log(checkDivisibility(myArr));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q.010 Correct the bug

let myCart = [
   { name: "Iphone", qty: 2 },
   { name: "Sumsung Galexy", qty: 6 },
   { name: "Hddr4 16GB", qty: 10 },
];

function doubleCartItem() {
   let finalCart = [];
   myCart.forEach((element) => {
      finalCart.push({ ...element, qty: element.qty * 2 });
   });
   return finalCart;
}

myCart = doubleCartItem(myCart);

console.log(myCart);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q.011 Unit Converter

function convertUnit(unitIs) {
   return (unitIs * 9) / 5 + 32;
}
console.log(`Temperature in Fahrenheit:`, convertUnit(80.5) + "F");

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q.012 Calculte Rental Cost

function genarateBill(carType, days) {
   switch (carType) {
      case "Economy":
         console.log(`To be paid Ammount is:` + `${4000 * days}`);
         break;

      case "MidSize":
         console.log(`To be paid Ammount is:` + `${10000 * days}`);
         break;

      case "Luxury":
         console.log(`To be paid Ammount is:` + `${20000 * days}`);
         break;

      default:
         console.log("Invalid Input");
   }
}

genarateBill("MidSize", "3");

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q.013 Bill Splitter

let dishesCostsList = [200, 400, 400];

let numPerson = 4;

function splitBill(dishesCostsList, numPerson) {
   let totalBill = dishesCostsList.reduce((acc, curr) => acc + curr);

   return {
      totalBill: totalBill,
      billPerPerson: totalBill / numPerson,
   };
}

const finalBill = splitBill(dishesCostsList, numPerson);

console.log(finalBill);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q.014 Calculate the final order price

let myCartTwo = [
   { unitPrice: 199, qty: 2 },
   { unitPrice: 299, qty: 4 },
   { unitPrice: 799, qty: 3 },
   { unitPrice: 699, qty: 5 },
   { unitPrice: 499, qty: 3 },
];

function finalOrderPrice(customerCart) {
   let finalPrice = [];

   customerCart.forEach((element) => {
      finalPrice.push(element.unitPrice * element.qty);
   });

   finalPrice = finalPrice.reduce((acc, curr) => acc + curr);

   return {
      finalPrice: finalPrice,
   };
}

let resultTwo = finalOrderPrice(myCartTwo);
console.log(resultTwo);

//{ finalPrice: 8983 }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q.015 Calculate the percentage of the discount

let productList = [
   { productPrice: 89, productDiss: 10 },
   { productPrice: 299, productDiss: 15 },
   { productPrice: 749, productDiss: 20 },
];

let showOffer = (productList) => {
   let todayOffer = [];
   productList.forEach((element) => {
      todayOffer.push({
         ...element,
         save: Math.round((element.productPrice * element.productDiss) / 100),
      });
   });
   return todayOffer;
};

console.log(showOffer(productList));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q.016 Generate a random number

const randomNum = (() => {
   return Math.round(Math.random() * 100);
})();

console.log(randomNum);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q.017 Build a banking application

let userData = { name: "Vishal", balance: 25000 };

function updateUserData(transactions, userData, amount) {
   switch (transactions) {
      case "withdrawal":
         userData.balance += amount;
         break;
      case "deposit":
         userData.forEach((element) => {
            updateBalance.push(element.balance - amount);
         });
         break;
      default:
         return "Invalid input";
   }
   return userData;
}

console.table(updateUserData("withdrawal", userData, 5000));

// let userData = { name: "Vishal", balance: 25000 };

// const TransactionsType = { WITHDRAWAL: "withdrawal", DEPOSIT: "deposit" };

// function updateUserData(transactions, userData, amount) {
//    switch (transactions) {
//       case TransactionsType.WITHDRAWAL:
//          userData.balance += amount;
//          break;
//       case TransactionsType.DEPOSIT:
//          userData.forEach((element) => {
//             updateBalance.push(element.balance - amount);
//          });
//          break;
//       default:
//          return "Invalid Input";
//    }
//    return userData;
// }

// console.table(updateUserData(TransactionsType.WITHDRAWAL, userData, 5000));

// Q.017 Build a banking application
console.log(resultTwo);
