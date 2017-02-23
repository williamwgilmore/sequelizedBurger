var express = require('express');
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

//express set up to run on port 3000
var app = express();
var PORT = process.env.PORT || 3000;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//set public as the static folder
app.use(express.static(process.cwd() + "/public"));

//set up bodyParser
app.use(bodyParser.urlencoded({ extended: false }));

//set up methodOverride to use specified ?_method='METHOD' instead of POST
app.use(methodOverride("_method"));

//set up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//any routes are resolved by the controller
require("./routes/html-routes.js")(app);
require("./routes/post-api-routes.js")(app);
require("./routes/author-api-routes.js")(app);

//start server
// Syncing our sequelize models and then starting our express app
db.sequelize.sync({force: true}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

