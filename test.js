const mongoose = require('mongoose');
const Post = require('./models/Post');


mongoose.connect('mongodb://127.0.0.1/nodeblog_test1', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});


// Post.find({},(error,post)=>{
//     console.log(error,post)
// })
Post.create({
    title:"ikinci post ",
    content:"post "
},(error,post)=>{
console.log(error,post)
})