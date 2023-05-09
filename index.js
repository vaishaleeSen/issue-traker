// Define the PORT number to use
const PORT = 8000;

// Import the express framework and create an instance of the app
const express = require('express');
const app = express();

// Import the router from a separate file
const router = require('./route');

// Import the express-ejs-layouts module
const expressLayouts = require('express-ejs-layouts');

// Parse incoming request bodies in a middleware before the handlers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up the directory for static files
app.use(express.static('./assets'));

// Set up the app to use the express-ejs-layouts module
app.use(expressLayouts);

// Extract styles and scripts from sub-pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// Set up the router for the root URL
app.use('/', router);

// Set up the view engine to use ejs
app.set('view engine', 'ejs');

// Set up the directory where the view templates are located
app.set('views', './views');

// Start the app listening on the specified PORT
app.listen(PORT, () => {
  console.log('connected to server: ' + PORT);
});
