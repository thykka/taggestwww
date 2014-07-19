/* jshint
	node: true,	smarttabs: true, indent: 2,
	nonew: true, asi: true, maxcomplexity: 8,
	unused: true, undef: true, funcscope: true,
	laxcomma: true, multistr: true
*/
// var config = require("./config.json")
var config = {
  "views": {
    "folder": "./jade"
  },
  "www": {
    "port": 5000,
    "folder": "./public/",
    "renderer": "jade"
  }
}

var express = require("express")
  , app = express()
  , path = require("path")
  , jade = require("jade")

app.engine("jade", jade.render)
app.set("view engine", "jade")
app.set("views", path.join(__dirname + config.views.folder))

app.use(express.static(__dirname + config.www.folder));

app.listen( config.www.port, function() {
  console.log( "taggestwww running on port " + config.www.port )
} )