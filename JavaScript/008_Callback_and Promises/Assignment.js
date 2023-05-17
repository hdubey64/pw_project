// Q.1 Write a function that takes in an array of integers and a callback function, and returns a new array where each element is doubled using the callback.

// const doubledNum = (arr, cb) => {
//    return cb(arr);
// };
// let arr = [1, 2, 3, 4, 5, 6];
// const double = () => {
//    return arr.map((e) => e * 2);
// };
// console.log(doubledNum(arr, double));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q.2 Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The function should return a callback function “logString” that logs the sentence “The manipulated string is: “ along with the manipulated string or the new string to the console.

// let manipulateString = (strings, upLatter) => {
//    return upLatter(strings);
// };

// const logString = (strings) => {
//    let logStringResult = strings.toUpperCase();
//    return `The manipulated string is: ${logStringResult}`;
// };

// console.log(manipulateString("Vishal", logString));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q.3 Write a JavaScript function called ageInDays that accepts an object containing a person's first name, last name, and age in years as input. The function should concatenate the first and last name into a single string and store it in a variable called fullName. It should then calculate the person's age in days and store it in a variable called ageInDays.The ageInDays function should then return a callback function that logs a message to the console. The message should include the person's full name and age in days, and should be in the format: "The person's full name is [full name] and their age in days is [age in days]." Note that the ageInDays function should not log the message to the console directly, but should instead returna callback function that can be used to log the message at a later time.

// let obj = {
//    firstName: "Vishal",
//    lastName: "Dubey",
//    years: 1996,
// };
// const ageInDays = (person, cb) => {
//    const { firstName, lastName, years } = person;
//    let fullName = `${firstName} ${lastName}`;
//    let currentYear = new Date().getFullYear();
//    let totalYearsTillDate = currentYear - years;
//    let daysInCurrentYear = new Date().getDay();

//    let extraLeapDays = 0;
//    for (let i = years; i <= currentYear; i++) {
//       if (i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0)) {
//          extraLeapDays++;
//       }
//    }
//    let ageInDays = totalYearsTillDate * 365 + extraLeapDays;

//    cb(
//       `The person's fullname is ${fullName} and their age in days is ${ageInDays}.`
//    );
// };

// const logResult = (first) => {
//    console.log(first);
// };
// ageInDays(obj, logResult);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Q.4 Write a program that accepts a list of objects representing books [ title, author, and year] and a callback function. The program should use the map function to create a new list containing only the titles of the books, and then pass this new list to the callback function. The callback function should then log the titles to the console in alphabetical order.

// const books = [
//    {
//       title: "To Kill a Mockingbird",
//       author: "Harper Lee",
//       year: 1960,
//    },
//    {
//       title: "1984",
//       author: "George Orwell",
//       year: 1949,
//    },
//    {
//       title: "The Great Gatsby",
//       author: "F. Scott Fitzgerald",
//       year: 1925,
//    },
//    {
//       title: "One Hundred Years of Solitude",
//       author: "Gabriel Garcia Marquez",
//       year: 1967,
//    },
//    {
//       title: "Pride and Prejudice",
//       author: "Jane Austen",
//       year: 1813,
//    },
//    {
//       title: "Beloved",
//       author: "Toni Morrison",
//       year: 1987,
//    },
//    {
//       title: "The Catcher in the Rye",
//       author: "J.D. Salinger",
//       year: 1951,
//    },
//    {
//       title: "The Color Purple",
//       author: "Alice Walker",
//       year: 1982,
//    },
//    {
//       title: "The Sun Also Rises",
//       author: "Ernest Hemingway",
//       year: 1926,
//    },
//    {
//       title: "Slaughterhouse-Five",
//       author: "Kurt Vonnegut",
//       year: 1969,
//    },
// ];

// let booksOnlyWithTittle = (obj, cb) => {
//    let onlyTitle = obj.map((e) => e.title);
//    return cb(onlyTitle);
// };

// const alphabeticalOrder = (onlyTitle) => {
//    return onlyTitle.sort();
// };

// console.log(booksOnlyWithTittle(books, alphabeticalOrder));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Q.5 You need to write a function that takes a name as input and returns a promise that resolves with a greeting message. The function should greet the person using their name, with a message in the format "Hello, {name}!". For example, if the input to the function is "Mithun", the promise should resolve with the string "Hello, Mithun!".

// function greet(name) {
//    return new Promise((resolve, reject) => {
//       if (typeof name === "string") {
//          resolve(`Hello!, ${name}`);
//       } else {
//          reject("Please input a valid string");
//       }
//    });
// }
// greet("Vishal")
//    .then((message) => console.log(message))
//    .catch((error) => console.log(error));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Q.6 Write a function that asynchronously fetches data from an API [ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console.

// function fetchData() {
//    fetch("https://jsonplaceholder.typicode.com/todos/1", {
//       method: "GET",
//    })
//       .then((res) => {
//          res.json().then((data) => {
//             console.log(data);
//          });
//       })
//       .catch((error) => console.log(error));
// }

// fetchData();

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Q.7 Create an asynchronous function that retrieves data from two different API endpoints: "https://jsonplaceholder.typicode.com/todos/1" and "https://jsonplaceholder.typicode.com/posts/1". The first API returns a to-do task, while the second API provides post details. The function should combine the results from both APIs and log them as an object, where the keys are "todo" and "post", and the corresponding values are the responses from the respective APIs.

// async function getData() {
//    try {
//       const [todoResponse, postResponse] = await Promise.all([
//          fetch("https://jsonplaceholder.typicode.com/todos/1"),
//          fetch("https://jsonplaceholder.typicode.com/posts/1"),
//       ]);
//       const todo = await todoResponse.json();
//       const post = await postResponse.json();
//       console.log({ todo, post });
//    } catch (error) {
//       console.error(error);
//    }
// }

// getData();

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Q.7 Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then logs the data to the console. For example, you could use the API at https://jsonplaceholder.typicode.com/posts to retrieve a list of posts, and then display them to the browser console.

// async function retrieveData() {
//    fetch(" https://jsonplaceholder.typicode.com/posts").then((response) =>
//       response
//          .json()
//          .then((data) => console.log(data))
//          .catch((error) => console.log(error))
//    );
// }
// retrieveData();

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Q.7 Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then handles errors that may occur. For example, you could use the API at https://jsonplaceholder.typicode.com/posts/123456789 to simulate an error, and then display an error message on the webpage.

async function displayError() {
   fetch(" https://jsonplaceholder.typicode.com/posts").then((response) => {
      if (!response.ok) {
         throw new Error("Network Response was not ok ");
      }
      return response.json();
   });
}

displayError();
