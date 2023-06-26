const fs = require("fs");
const { CLIENT_RENEG_LIMIT } = require("tls");

// Asychronous way to read file
// fs.readFile("input.txt", function (err, data) {
//    if (err) {
//       console.log("Error:", err);
//       return err;
//    }
//    console.log("Data:", data.toString());
//    console.log("Read End");
//    return data;
// });

// console.log("Other Stuff");

// Sychronous way to read file

// var data = fs.readFileSync("input.txt");
// console.log("Data:", data.toString());
// console.log("Read End");
// console.log("Other Stuff");

// // Read > Open + read

// buf = new Buffer(1024);

// fs.open("input.txt", "r+", function (err, fd) {
//    if (err) {
//       console.log("Error in opening file:", err);
//    }
//    console.log("File open successfully!");

//    fs.read(fd, buf, 0, buf.length, 0, function (er, bytes) {
//       if (er) {
//          console.log("Error in reading file");
//       }
//       console.log("data:", bytes);
//       console.log("data:", buf.slice(0, bytes).toString());

//       //    Closing File

//       fs.close(fd, function (err) {
//          if (err) {
//             console.log("Error in closing File");
//          } else {
//             console.log("Success in closing File");
//          }
//       });
//    });
// });

// Writing to file

// fs.writeFile("input.txt", "PW Skill", function (err) {
//    if (err) {
//       console.log("Error in writing file");
//    } else {
//       console.log("Success in writing file! ");
//    }
// });

//Append to file

// fs.appendFile("input.txt", "--Vishal dubey", "utf8", function (err) {
//    if (err) {
//       console.log("Error in appending file");
//    } else {
//       console.log("Success in appending file!");
//    }
// });

//Deleting file

fs.unlink("input.txt", function (err) {
   if (err) {
      console.log("Error in deleting file");
   } else {
      console.log("Success in deleting file");
   }
});
