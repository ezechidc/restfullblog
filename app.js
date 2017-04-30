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
// INDEX ROUTE
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

// NEW ROUTE
app.get("/blogs/new", function(req,res){
    res.render("new");
});
// CREATE ROUTE
app.post("/blogs", function(req, res){
    // create blog
    Blog.create(req.body.blog, function(err, NewBlog){
        if(err){
            res.render("new");
        }else{
            //then redirect to thge index
            res.redirect("/blogs");
        }
    });
});
// SHOW ROUTE
app.get("/blogs/:id", function(req, res){
   Blog.findById(req.params.id, function(err, blogPost){
      if(err){
        res.redirect("/blogs");
      }else{
        res.render("show", {blog: blogPost});
      }
   });
});


app.listen(3000, function(){
	console.log("Server Started");
});
