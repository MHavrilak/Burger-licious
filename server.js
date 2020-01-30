var express = require('express');
var exphbs = require('express-handlebars');


var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("app/public"));

var burger = require('./controllers/burgers_controllers.js');
app.use(burger);

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});