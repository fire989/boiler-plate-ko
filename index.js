const express = require('express')
//const { default: mongoose } = require('mongoose')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.set('strictQuery',true);
mongoose.connect('mongodb+srv://fire989:abcd1234@boilerplate.hahxkll.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected....'))
    .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World!~~안녕하세요~'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))