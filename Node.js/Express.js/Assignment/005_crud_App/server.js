// Import the 'app' module from './app.js'
const app = require("./app.js");

// Define the port number to listen on, using the environment variable 'PORT' or default to 5000
const PORT = process.env.PORT || 5000;

// Start the server and listen on the defined port
app.listen(PORT, () => {
   console.log(`Server listening on port http://localhost:${PORT}`);
});
