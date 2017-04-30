var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose");

//App config
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb://localhost/restfull_blog");
app.use(express.static("public"));

//Mongoose config
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

//RESTFULL ROUTES

app.get("/", function(req, res){
	res.redirect("/blogs");
});
app.get("/blogs", function(req, res){
	Blog.find({}, function(err, blogs){
        if(err){
        	console.log("Error!");
        }else{
        	res.render("index", {blogs: blogs});
        }
	});
});


app.listen(3000, function(){
	console.log("Server Started");
});
