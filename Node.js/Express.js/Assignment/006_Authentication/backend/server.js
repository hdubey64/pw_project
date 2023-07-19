const app = require("./app.js");

const PORT = process.env.PORT || 5000;
const MONGO_URL =
   process.env.MONGO_URL || "mongodb://localhost:27017/authAssignment";

app.listen(PORT, () => {
   console.log(`Server listening on  localhost: ${PORT}`);
   return `Server listening on  localhost: ${PORT}`;
});
