
// app.get('/test',(req,res,next)=> 
// {
//    console.log("I AM MIDDLEWARE")
//     next();
// })

// app.get('/',(req,res)=> 
// {
//     res.sendFile(path.resolve(__dirname,'index.html'))
// })

// app.get('/',(req,res)=> 
// {
//     res.sendFile(path.resolve(__dirname,'about.html'))
// })
// app.get('/',(req,res)=> 
// {
//     res.sendFile(path.resolve(__dirname,'error.html'))
// })

// app.get('/test',(req,res)=> 
// {
//     res.sendFile(path.resolve(__dirname,'contact.html'))
// })

// app.listen(port, hostname, ()=> 
// {
//     console.log(`Server çalışıyor,http://${hostname}:${port}/`)
// })



// const http = require("http")
// const fs =require("fs")



// const hostname= "127.0.0.1"

// const port = 3000

// const indexPage= fs.readFileSync("index.html")
// const aboutPage= fs.readFileSync("about.html")
// const contactPage= fs.readFileSync("contact.html")
// const errorPage= fs.readFileSync("error.html")

// const server = http.createServer((req,res) => 
// {
//    if(req.url==='/')
//    {
//        return res.end(indexPage)
//    }
//    else  if(req.url==='/about')
//    {
//        return res.end(aboutPage)
//    }
//    else  if(req.url==='/contact')
//    {
//        return res.end(contactPage)
//    }

//    else
//    {
//        res.statusCode =404
//        res.end("Sayfa bulunamadı")
//    }
// })

// server.listen(port, hostname, ()=> 
// {
//     console.log(`Server çalışıyor,http://${hostname}:${port}/`)
// })

