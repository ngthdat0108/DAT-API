const express =require('express');

const app =express()
const hostname='localhost'
const port=8010

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.listen(port, hostname,()=>{
    console.log(`hello Dat, im running server at http://${hostname}:${port}/`)
})