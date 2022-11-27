const express = require('express');
const PORT = 5000;
const app = express();
const mongoose = require('mongoose');
const router = require('./Router.js');
const cors = require('cors'); 

const dbUrl = 'mongodb://localhost:27017/shop?readPreference=primary&ssl=false';

app.use(express.json());
app.use(cors());
app.use('/api',router);  


// multer



async function start(){
  try{
    await mongoose.connect(dbUrl,{useUnifiedTopology:true,useNewUrlParser:true});
    app.listen(5000,()=>{console.log(11121)})    
  }catch(e){

  }
}
start();