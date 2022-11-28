const mongoose = require('mongoose');
const Product = new mongoose.Schema({
  pAddres:{type:String,require:true},
  pBrand:{type:String,require:true},
  pCoast:{type:String,require:true},
  pCountry:{type:String,require:true},
  pElement:{type:String,require:true},
  pGeneration:{type:String,require:true},
  pGenerationCode:{type:String,require:true},
  pMarkaModel:{type:String,require:true},
  pMarkaYear:{type:Object,require:true},
  pMarket:{type:String,require:true},
  pModel:{type:String,require:true},
  pName:{type:String,require:true},
  pPerson:{type:String,require:true},
  pPhone:{type:String,require:true},
  pQuantity:{type:String,require:true},
  pSystem:{type:String,require:true},
  prod:{type:String,require:true},
  pComment:{type:String,require:true},
  image1:{type:String,require:true},
  image2:{type:String,require:true},
  image3:{type:String,require:true},
  image4:{type:String,require:true},
  
  
})
module.exports = mongoose.model('Product',Product);