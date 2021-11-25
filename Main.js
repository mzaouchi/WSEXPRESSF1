const express = require('express')

const app = express()

const port = 5000

var users = [
    {id : 1, name : "Seif", age : 24},
    {id : 2, name : "Hassen", age : 25},
    {id : 3, name : "Sinda", age : 26}
]
// Traduction bin => Json
app.use(express.json())
// Get Method
app.get('/getUsers',(req,res)=>{
    res.send(users)
})

// Post Method req.body 
app.post('/postUser',(req,res)=>{
    users = [...users,req.body]
    res.send({users,Msg:"User added"})
})

//Delete Method req.params

app.delete('/deleteUser/:id',(req,res)=>{
    // console.log(req.params)
    const {id} = req.params
    users = users.filter(user => user.id != id)
    res.send({users,Msg:"User deleted"})
})

app.put('/updateUser/:id',(req,res)=>{
    const {id} = req.params
    users = users.map(user => user.id == id ? {...user,...req.body} : user)
    res.send({users,Msg:'User Updated'})
})









app.listen(port,()=>{console.log(`Server is running on the port ${port}`)})