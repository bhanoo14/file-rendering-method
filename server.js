const express = require('express');
const path = require('path');

const app = express();

// Set the view engine to use EJS
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to render the index.ejs template
app.get('/', (req, res) => {
  res.render('index', { message: 'Hello, world!' });
});

// Define a route to serve a basic HTML file
app.get('/basic', (req, res) => {
  // Send the HTML file as response
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
