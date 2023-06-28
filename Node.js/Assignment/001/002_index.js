// const fs = require("fs");

// fs.readFile("nodejs_architecture.txt", function (err, data) {
//    if (err) {
//       console.log("Error:", err);
//       return err;
//    }
//    console.log("Data:", data.toString());
//    //    console.log("Read End");
//    return data;
// });

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const advantageOfNodeJS =
//    "Node.js offers several advantages, including efficient handling of concurrent requests, non-blocking I/O operations, scalability for real-time applications, unified language for server-side and client-side programming (JavaScript), a vast ecosystem of packages and libraries, and easy sharing of code between server and client.";

// fs.appendFile(
//    "nodejs_architecture.txt",
//    advantageOfNodeJS,
//    function (err, data) {
//       if (err) {
//          console.log("Error:", err);
//          return err;
//       }
//       console.log("Data:", data);
//       //   console.log("Read End");
//       return data;
//    }
// );

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// fs.unlink("nodejs.architecture.txt", function (err) {
//    if (err) {
//       console.log("Error:", err);
//    } else {
//       console.log("Delete");
//    }
// });

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const os = require("os");

console.log("Operating System Name: " + os.type()); // Output:- Operating System Name: Windows_NT
console.log("Operating System Release: " + os.release()); // Output:- Operating System Release: 10.0.22621

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const http = require("http");

// const server = http.createServer((req, res) => {
//    if (req.url == "/") {
//       res.write(
//          "<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>"
//       );
//       res.end;
//    }
// });

// server.listen(3001);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("subscribe", (channelName) => {
   console.log(`Thanks For Subscribing to ${channelName}`);
});

eventEmitter.emit("subscribe", "Collage Wallah"); // OutputThanks For Subscribing to Collage Wallah

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const eventEmitter1 = new EventEmitter();

const evemtHandler = () => {
   console.log("Event handler Called");
};

// Register the event handler for the event 'myEvent'
eventEmitter.on("myEvent", evemtHandler);

// Emit the event 'myEvent'
eventEmitter.emit("myEvent"); //Output:- Event handler Called

// Remove the event handler for the event 'myEvent'
eventEmitter.off("myEvent", evemtHandler);

// Emit the event 'myEvent'
eventEmitter.emit("myEvent"); // Output:- No Output

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(
   `The default maximum number of event listners are: ${eventEmitter.getMaxListeners()}`
);

eventEmitter.setMaxListeners(5);

console.log(
   `The updated maximum number of event listners are: ${eventEmitter.getMaxListeners()}`
);
