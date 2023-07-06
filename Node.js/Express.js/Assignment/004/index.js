const express = require("express");
const app = express();

const PORT = 4004;
const HOSTNAME = "localhost";

app.get("/", (req, res) => {
   let random = Math.floor(Math.random() * 100);
   res.json({ random });
});

app.listen(PORT, () => {
   console.log(`The HTTP Server id running: ${HOSTNAME}:${PORT}`);
});
