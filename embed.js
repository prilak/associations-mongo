var mongoose = require("mongoose");
//var Post = require("")
mongoose.connect("mongodb://localhost/blog_demo");

//post -title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);

//user -email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});
var User = mongoose.model("User", userSchema);

// var newUser = new User({
//     email: "chuck@brown.edu",
//     name: "Billy Jones"
// });

// newUser.posts.push({
//     title: "50/50",
//     content: "spam to veal"
// });
// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });
User.findOne({name: "Billy Jones"}, function(err, user){
    if(err){
        console.log(err);
    } else {
        // user.posts.push({
        //   title: "Stuff",
        //   content: "cool"
        // });
        // user.save(function(err, user){
        //   if(err){
        //       console.log(err);
        //   } else {
        //       console.log(user);
        //   }
        // });
        console.log(user);
    }
});
// var newPost = new Post({
//     title: "Apples",
//     content: "Am i right???"
// });
// newPost.save(function(err, post){
//   if(err){
//       console.log(err);
//   } else {
//       console.log(post);
//   }
// });