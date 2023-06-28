const fs = require("fs");

const information =
   "'Node.js is built on Chrome's V8 JavaScript engine and follows an event-driven, non-blocking I/O model. It uses a single-threaded event loop for handling asynchronous operations and provides a rich set of APIs for building scalable and high-performance applications.';";

fs.writeFile("nodejs_architecture.txt", information, function (err) {
   if (err) {
      console.log("Error in writing file ");
   } else {
      console.log("Success in writing file ");
   }
});
