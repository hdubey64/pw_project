import express from "express";

const app = express();

app.get("/", (req, res) => {
   res.send("Hello World!");
});
app.get("/instagram", (req, res) => {
   res.send("You are visited instagram");
});

export default app;
