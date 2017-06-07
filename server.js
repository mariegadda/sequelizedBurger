var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var db = require("./models");
var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

db.sequelize.sync().then(function() {
	app.listen(PORT, function (){
		console.log("listening on port %s", PORT);
	});
});



//https://youtu.be/qwUbsg95TbI?t=676