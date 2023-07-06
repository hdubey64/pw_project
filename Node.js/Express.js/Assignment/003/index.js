const express = require("express");
const app = express();

const PORT = 4003;
const HOSTNAME = "localhost";

app.get("/", (req, res) => {
   return res.json({ msg: "I am homepage" });
});
app.get("/about", (req, res) => {
   return res.json({ msg: "I am about page" });
});

app.get("/contact", (req, res) => {
   return res.json({ email: `suppor#@pwskills.com` });
});

app.listen(PORT, () => {
   console.log(`The HTTP Server id running: ${HOSTNAME}:${PORT}`);
});
