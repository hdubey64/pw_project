// if(condtion){
//     //statement
// }

// if (1 === 1) {
//    console.log("Statement executed");
// }

//if statement

// let userToken = undefined;
// let googleAuthToken = true;

// if (userToken || googleAuthToken) {
//    console.log("User allowed to login");
// }
// console.log("Outside the scope");

//if else statement

// let userToken = undefined;
// let googleAuthToken = false;

// if (userToken || googleAuthToken) {
//    console.log("User allowed to login");
// } else {
//    console.log("Please login to get your token");
// }
// console.log("Outside the scope");

//Nested if else statement

// let ispwStudent = false;
// let ispwEmployee = true;

// if (ispwStudent) {
//    console.log("Verified your PW Student");
// }
// if (ispwEmployee) {
//    console.log("Congrats, your are PW Employee");
// } else {
//    console.log("Sorry, Details not found");
// }

//Ternory

//Condtion ? true :false

// let isLoggedIn = false ? console.log("Logout") : console.log("Log in");

//Switch case

// switch (key) {
//    case value:

//       break;
//       default:

//       break;
// }

// let month = 4;

// switch (month) {
//    case 1:
//       console.log("Monday");
//       break;
//    case 2:
//       console.log("Teusday");
//       break;
//    case 3:
//       console.log("Wednesday");
//       break;
//    case 4:
//       console.log("Thursday");
//       break;
//    case 5:
//       console.log("Friday");
//       break;
//    case 6:
//       console.log("Saturday");
//       break;

//    default:
//       break;
// }

//For loop

//for(Init, condition, changer){
//statement
//}

// for (let i = 0; i < Array.length; i++) {
//    const element = array[index];
// }
// for (let i = 0; i < 5; i++) {
//    console.log(`Value of i is : ${i}`);
// }

let arr = ["PW", "PW Skill", "Internship"];
// for (let i = 0; i < arr.length; i++) {
//    const element = arr[i];
//    console.log(element);
// }

// let obj = {
//    name: "PwStudent",
//    course: "Web Dev",
//    duration: 100,
// };
// for (const i in obj) {
//    console.log(`${i} - ${obj[i]} `);
// }

// for (const ite of arr) {
//    console.log(ite);
// }

//while loop

let i = 0;
while (i <= 10) {
   console.log(`Value of i is: ${i}`);
   i++;
}
