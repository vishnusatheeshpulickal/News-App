const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const expresslayout = require('express-ejs-layouts')

app.use(express.static('public'))
app.use('/css',express.static(__dirname +'/public/css'))
app.use('/images',express.static(__dirname +'/public/images'))
app.use('/js',express.static(__dirname +'/public/js'))
app.use(expresslayout)
app.use(bodyParser.urlencoded({ extended:false }))


app.set('views','./src/views/')
app.set('view engine','ejs')

const newsRouter = require('./src/routes/news')

app.use('/',newsRouter)
app.use('/article',newsRouter)

const port = process.env.PORT || 3030;
app.listen(port,()=>console.log(`Listening port ${port}...`));