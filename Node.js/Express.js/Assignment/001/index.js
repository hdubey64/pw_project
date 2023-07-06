const http = require("http");

const PORT = 4001;
const HOSTNAME = "localhost";

const menProducts = [
   {
      id: 1,
      name: "Men T-Shirt",
      category: "Men",
      price: 29.99,
      color: "Black",
      size: "M",
      image: "https://example.com/men-tshirt.jpg",
   },
];

const womenProducts = [
   {
      id: 1,
      name: "Women Dress",
      category: "Women",
      price: 59.99,
      color: "Red",
      size: "S",
      image: "https://example.com/women-dress.jpg",
   },
];

const server = http.createServer((req, res) => {
   console.log("res.url", req.url);
   if (req.url == "/") {
      res.statusCode = 200;
      res.write("<h1>Welcome to Men & Women Dummy Data</h1>");
   } else if (req.url == "/men") {
      res.statusCode = 200;
      return res.end(JSON.stringify(menProducts));
   } else if (req.url == "/women") {
      res.statusCode = 200;
      res.end(JSON.stringify(womenProducts));
   } else {
      res.statusCode = 404;
      res.write("<h1> 404: Page Not Found </h1>");
   }
   res.end();
});

server.listen(PORT);
console.log(`The HTTP Server id running: ${HOSTNAME}:${PORT}`);
