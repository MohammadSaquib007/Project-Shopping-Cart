const express = require('express');
const mongoose = require('mongoose');
const route = require('./routes/route.js')
const multer = require('multer')
const app = express();
app.use(multer().any())
app.use(express.json())
mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://saquib:Saquib123@mohammadsaquib.f3sxbno.mongodb.net/Shopping",
{ useNewUrlParser: true })
.then(() => console.log("MongoDB is connected"))
.catch(err => console.log(err))
app.use("/", route)
app.listen(3000, function(){
console.log("Express port is running on "+3000)})



