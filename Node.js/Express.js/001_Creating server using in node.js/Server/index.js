const http = require("http");

const PORT = 3032;
const HOSTNAME = "localhost";

const server = http.createServer((req, res) => {
   //Home page
   //About page
   //Contact Page
   //Product Page
   //Rest...> Error

   if (req.url == "/") {
      res.statusCode = 200;
      res.setHeader("Content-type", "text/plain");
      res.end("Welcome to Node JS Server by Vishal Dubey");
   } else if (req.url == "/about") {
      res.statusCode = 200;
      res.setHeader("Content-type", "text/plain");
      res.end("About Page");
   } else if (req.url == "/contact") {
      res.statusCode = 200;
      res.setHeader("Content-type", "text/plain");
      res.end("Contact Page");
   } else if (req.url == "/product") {
      const options = {
         hostname: "fakestoreapi.com",
         path: "/products/1",
         method: "GET",
      };

      const apiReq = http.request(options, (apiRes) => {
         apiRes.on("data", (data) => {
            res.statusCode = 200;
            res.setHeader("Content-type", "application/json");
            res.end(data.toString());
         });
      });

      apiReq.on("error", () => {
         console.log(e);
      });

      apiReq.end();
   } else {
      res.statusCode = 500;
      res.setHeader("Content-type", "text/plain");
      res.end("Server Error!");
   }
});

server.listen(PORT, () => {
   console.log(`Server running at ${HOSTNAME}:${PORT}`);
});
