const express = require("express");

const app = express();

const PORT = 4010;
const HOSTNAME = "localhost";

app.get("/", (req, res) => {
   res.send(
      ` <header><nav><iv class="logo"><img src="./assets/white-logo.png" alt="" /></iv><ul><li><ahref="#">Our Menu</ahref=></li><li><a href="#">Maps</a></li><li><a href="#">About</a></li><li><a href="#">Contact</a></li></ul><div class="navberBtns"><button>Order</button></div></nav></header>`
   );
});
app.get("/about", (req, res) => {
   res.send("About Page");
});
app.get("/contact", (req, res) => {
   res.send("Contact");
});
app.get("/", (req, res) => {
   res.send("Hello World");
});

app.listen(PORT, () => {
   console.log(`Server Runnig at ${HOSTNAME}:${PORT}`);
});
