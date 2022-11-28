const Router = require('express').Router;
const Schema = require('./Schema.js');
const product  = new Router();
const path = require('path');
const multer = require('multer');


const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'images');
    // console.log(req.body)
  },
  filename:(req,file,cb)=>{
    // console.log(file);
    // console.log(req);
    cb(null,Date.now()+path.extname(file.originalname));
  }
})

const upload = multer({storage:storage});


product.post('/post',upload.any('image'),async(req,res)=>{
  try{
    // console.log(req.files[1]);
    
    let obj = {};
    for(let k in req.body){
      obj[k]  = req.body[k]
    }
    obj.image1 = `server/images/${req.files[0].filename}`;
    obj.image2 = `server/images/${req.files[1].filename}`;
    obj.image3 = `server/images/${req.files[2].filename}`;
    obj.image4 = `server/images/${req.files[3].filename}`;
    const newProd=await Schema.create(obj);
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
    // console.log(req.headers); 
    // console.log(req.file);
    console.log(req);
    res.status(200).json("приветтт1");
  }catch(e){
    res.status(500).json(e);
  }
});

module.exports = product;