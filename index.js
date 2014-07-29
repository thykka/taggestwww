/* jshint
	node: true,	smarttabs: true, indent: 2,
	nonew: true, asi: true, maxcomplexity: 8,
	unused: true, undef: true, funcscope: true,
	laxcomma: true, multistr: true
*/
var config = require("./config.json")

var express = require("express")
  , path = require("path")
  , app = express()

app.set("views", path.join( __dirname + config.views.folder ) )
app.set("view engine", "jade")

app.get("/", function(req,res){
  res.render("index", config.jadeConfig)
})

app.use( express.static( path.join( __dirname + config.www.folder ) ) );

app.listen( config.www.port, function() {
  console.log( "taggestwww running on port " + config.www.port )
} )