// Import the required modules
const express = require("express");
const path = require("path"); // Import the 'path' module to work with file paths
const app = express();
const port = process.env.PORT || 3000;

// Define a route to serve HTML files based on the route parameter
app.get("/index.html", (req, res) => {
  const filePath = path.join(__dirname, "html", "index.html");

  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).send("File not found");
    }
  });
});


// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
