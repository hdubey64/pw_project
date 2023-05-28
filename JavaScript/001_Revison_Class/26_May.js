// // creting a Promise

// const promiseOne = new Promise(function name(resolve, reject) {
//    //Do an async task
//    // DB call, crypto

//    setTimeout(function () {
//       console.log("Complete");
//    }, 1000);
// });

// // Consuming Promise

// promiseOne.then(function () {
//    console.log("Promise Consumed");
// });

// new Promise(function (resolve, reject) {
//    setInterval(function () {
//       console.log("Task-2");
//       resolve();
//    }, 2000);
// }).then(function () {
//    console.log("Consume-2");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//    setTimeout(function () {
//       //DB call to get users from database
//       resolve({ username: "Vishal", email: "V@gmail.com" });
//    }, 500);
// });

// promiseThree.then(function (user) {
//    console.log(user);
// });

// const promiseFour = new Promise(function (resolve, reject) {
//    setTimeout(function () {
//       let error = true;
//       if (!error) {
//          resolve({ username: "Vishal" });
//       } else {
//          reject("ERROR: Somthing went wrong");
//       }
//    }, 500);
// });

// promiseFour
//    .then(function (user) {
//       console.log(user);
//       return user.username;
//    })
//    .then((name) => {
//       console.log(name);
//    })
//    .catch(function (error) {
//       console.log(error);
//    })
//    .finally(() => {
//       "Resolve or rejected";
//    });

const promiseFive = new Promise(function (resolve, reject) {
   setTimeout(function () {
      let error = false;
      if (!error) {
         resolve({ username: "Vishal" });
      } else {
         reject("ERROR: Somthing went wrong");
      }
   }, 500);
});

async function consumePromiseFive() {
   const response = await promiseFive;
   console.log(response);
}

consumePromiseFive();

async function getAllUsers() {
   const response = await fetch("https://jsonplaceholder.typicode.com/users");
   const data = response.json();
   console.log(data);
}

getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users").then(function (response) {
   return response.json();
});
