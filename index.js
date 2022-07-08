const express = require('express');

const datarouter = require('./modules/data');

const hostname = 'localhost';
const port = 8900;



const app=express();
app.use(express.json());//cover request data to json
app.use(express.urlencoded({extended:false}));


app.use("/",datarouter);
app.listen(port,function(){
    console.log("server strated");

})