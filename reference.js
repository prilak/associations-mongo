var mongoose = require("mongoose");
mongoose.Promise = global.Promise;//used to fix a bug saying mongoose's default promise library is deprecated
mongoose.connect("mongodb://localhost/blog_demo_2", { useMongoClient: true });

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
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});
var User = mongoose.model("User", userSchema);
// Post.create({
//   title: "you like cow?",
//   content: "ya"
// }, function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         User.findOne({email: "ziggy@star.dust"}, function(err, foundUser){
//             if(err){
//                 console.log(err);
//             } else {
//                 foundUser.posts.push(post);
//                 foundUser.save(function(err, data){
//                   if(err){
//                       console.log(err);
//                   } else {
//                       console.log(data);
//                   }
//                 });
//             }
//       })
//     }
// });
// User.create({
//     email: "ziggy@star.dust",
//     name: "My Boy"
// });
User.findOne({email: "ziggy@star.dust"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});
