const express = require("express");
const app = express();

const PORT = 4002;
const HOSTNAME = "localhost";

let counter = 0;

app.get("/", (req, res) => {
   return res.status(200).json({ counter });
});

app.get("/increment", (req, res) => {
   counter++;
   return res.status(200).json({ counter });
});

app.get("/decrement", (req, res) => {
   counter--;
   res.send(`<h1>Counter: ${counter}</h1>`);
});

app.listen(PORT, () => {
   console.log(`The HTTP Server id running: ${HOSTNAME}:${PORT}`);
});
