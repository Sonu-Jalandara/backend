require('dotenv').config()


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Backend! HOME')
})

app.get('/login',(req,res)=>{
res.send('Welcome to login page')
})

app.get('/instagram',(req,res)=>{
    res.send("sonu_jalandara")
})

app.get('/snapchat',(req,res)=>{
    res.send('<h1>Sonu</h1>')

})
app.get('/yt',(req,res)=>{
    res.send('<h1>Sonu kumar</h1>')

    app.get('/gmail',(req,res)=>{
        res.send("sonukundanpura05@gmail.com")
    })
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})