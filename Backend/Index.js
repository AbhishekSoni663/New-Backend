const express = require('express')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/', require('./TodoRoutes/TodoRoutes'))


app.listen(PORT, ()=>{
    console.log(`Server is running at Port : ${PORT}`)
})

