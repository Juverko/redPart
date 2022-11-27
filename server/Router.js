const Router = require('express').Router;
const Schema = require('./Schema.js');
const product  = new Router();
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'images')
  },
  filename:(req,file,cb)=>{
    console.log(file);
    cb(null,Date.now()+path.extname(file.originalname));
  }
})

const upload = multer({storage:storage});


product.post('/post',upload.single('image'),async(req,res)=>{
  try{
    // console.log(req.body);
    const newProd=await Schema.create(req.body);
    return res.json(newProd);
  }catch(e){
    res.status(500).json(e);
  }
}) 
product.get('/all',async(req,res)=>{
  try{
    const newProd=await Schema.find();
    return res.json(newProd);
  }catch(e){
    res.status(500).json(e);
  }
}) 

product.get('/test',async(req,res)=>{
  try{
    const products = await Schema.find(req.query);
    return res.json(products); 
  }catch(e){
    res.status(500).json(e);
  }
});

product.post('/file',upload.single('image'),async(req,res)=>{
  try{
    console.log(req.headers);
    res.status(200).json("приветтт1");
  }catch(e){
    res.status(500).json(e);
  }
});

module.exports = product;