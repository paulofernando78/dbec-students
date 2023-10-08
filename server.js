import express from 'express';

const app = express();
const port = 3000;

// Serve static files from a directory (e.g., public)
app.use(express.static('public'));

app.listen(port, () => {
console.log(`Server is listening at http://localhost:3000`);
});
