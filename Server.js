const express = require('express')

const app = express()

const port = 5000

const Middleware=(req,res,next)=>{
    console.log(req.method)    
    next()
}
app.use(Middleware)
app.use(express.static('public'))

// app.get('/Aziz',(req,res)=>{
  
//     res.send('Hello Aziz')
// })

// app.get('/Balise',(req,res)=>{
//     res.send('<h1>Menzah6</h1>')
// })

// app.get('/Contacts',(req,res)=>{
//     res.sendFile(__dirname+'/public/Contacts.html')
// })

// app.get('/Seif',(req,res)=>{
//     res.sendFile(__dirname+'/public/')
// })

// app.get('/style.css',(req,res)=>{
//     res.sendFile(__dirname+'/public/style.css')
// })




app.listen(port,()=>{console.log(`Server is running on the port ${port}`)})