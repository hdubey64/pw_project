//Creating a promise
const promiseOne = new Promise(function (resolve, reject) {
   // Do sn async task
   // DB call, Crypto
   setTimeout(function () {
      console.log("Async task is complete");
      resolve();
   }, 1000);
});

//Consuming a promise

promiseOne.then(function () {
   console.log("Promise consumned");
});

new Promise(function (resolve, reject) {
   setTimeout(function () {
      console.log("Async task 2");
   }, 1000);
   resolve();
}).then(function () {
   console.log("promise Cnsumed: 2");
});

const promiseThree = new Promise(function (resolve, reject) {
   setTimeout(function () {
      //DB call to get all users from database
      resolve({ username: "Vishal", email: "d@pw.live" });
   }, 1000);
});

promiseThree.then(function (user) {
   console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
   setTimeout(function () {
      let error = false;
      if (!error) {
         resolve({ username: "Vishal", email: "ex@email.com" });
      } else {
         reject("ERRor: Something went wrong");
      }
   }, 1000);
});

promiseFour
   .then(function (user) {
      console.log(user);
      return user.username;
   })
   .then((name) => {
      console.log(name);
   })
   .catch(function (error) {
      console.log(error);
   })
   .finally(function () {
      console.log("The Promise id either resolve or rejected");
   });

const promiseFive = new Promise(function (resolve, reject) {
   setTimeout(function () {
      let error = false;
      if (!error) {
         resolve({ username: "Vishal", email: "ex@email.com" });
      } else {
         reject("ERRor: Something went wrong");
      }
   }, 1000);
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

// fetch("https://jsonplaceholder.typicode.com/users")
//    .then(function (response) {
//       return response.json();
//    })
//    .then((data) => {
//       console.log(data);
//    })
//    .catch((error) => {
//       console.log(error);
//    });
