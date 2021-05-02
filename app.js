const express = require('express')
const exphbs  = require('express-handlebars')
const app = express()
const port = 3000
const hostname= "127.0.0.1"
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fileUpload=require("express-fileupload") 
const {generateDate,limit,truncate,paginate}=require("./helpers/hbs")
const expressSession = require("express-session")
const MongoStore = require('connect-mongo').default;
const methodOverride = require('method-override')


mongoose.connect('mongodb://127.0.0.1/nodeblog_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
   useCreateIndex: true
});
 


app.use(expressSession({
  secret:'test',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: 'mongodb://localhost:27017' })
})) 


//Flash-Message Middleware


app.use(fileUpload())

app.use(express.static("public"))

app.use(methodOverride('_method'))



const hbs = exphbs.create({
  helpers :{
    generateDate : generateDate,
    limit:limit,
    truncate:truncate,
    paginate:paginate
  }
})


app.engine("handlebars",hbs.engine,
  exphbs({
       defaultLayout: "main",
       runtimeOptions: {
       allowProtoPropertiesByDefault: true,
       allowProtoMethodsByDefault: true,
    },
  })
);


/*
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  })
);
app.set("view engine", "handlebars");
*/
app.set("view engine", "handlebars");

// parse application/x-www-form-urlencoded
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use((req,res,next)=>
{
 const {userId} = req.session
 if(userId)
 {
   res.locals={displayLink:true}
 }
  else
  {
    res.locals={displayLink:false}
  }

  next()
}) 


app.use((req,res,next)=>
{
 res.locals.sessionFlash = req.session.sessionFlash
 delete req.session.sessionFlash
 next()
})


const main = require("./routes/main")
const posts = require("./routes/posts")
const users = require("./routes/users")
const admin = require("./routes/admin/index")
const contact = require("./routes/contact")

app.use("/",main)
app.use("/posts",posts)
app.use("/users",users)
app.use("/admin",admin)
app.use("/contact",contact)

app.listen(port, hostname, ()=> 
{
    console.log(`Server çalışıyor,http://${hostname}:${port}/`)
})
