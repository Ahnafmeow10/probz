// Importing the express module
const express = require('express');
const app = express();

// Setting the port for the server to listen on
const port = 3000;

// Define the root route that sends a response
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Problem Solver!</h1>');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
