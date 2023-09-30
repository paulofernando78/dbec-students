// Import the required modules
const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // Use the specified port or 3000 by default

// Define a route to handle incoming requests
app.get("/", (req, res) => {
  res.send("Hello, World!"); // Send a response to the root URL
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
