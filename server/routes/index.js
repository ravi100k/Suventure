const fs = require('fs');
const path = require('path');
const multer = require('multer');
const mongoose = require('mongoose');
const Product = require('../schema/product');

const storage = multer.diskStorage({
  destination: './images',
  filename(req, file, cb) {
    cb(null, `${new Date()}-${file.originalname}`);
  },
});

var upload = multer({storage});

module.exports = function (app,db) {

  app.get('/get/product', (req, res, next) => {
    Product.find({},(err,data) =>{
      if(err){
        res.send(err)
      }
      res.send(data)
    })

  });

  app.post('/save/product',upload.any('file'), (req, res) => {
    let new_product = req.body.data
    // let up = upload.any(req.body.data['Picture'])
    const file = req.body.data['Picture'];
    new Product(new_product).save().then((data)=>{
      res.send(data)
    }).catch((err)=>console.log(err))
  });

  app.put('/update/product',(req,res) =>{
    let search_text = req.body.data['_id']
    let data = req.body.data
    // console.log(search_text,data);
    let id = ''
    try {
      Product.findOneAndUpdate({'_id':search_text},{
        "Title":data['Title'],
        "Price":data['Price'],
        "Quantity":data['Quantity'],
        "Picture" : data['Picture'],
        "Descriptions": data['Descriptions'],
      },(err,data)=>{
          if (err){
            console.log(err);
          }else{
            console.log(data,"ho gaya Update");
            res.send('OK')
          }
      })
    } catch (e) {
      console.log(e);
    }
  });

  app.post('/delete/product',(req,res)=>{
    console.log(req.body);
    let delete_item_id = req.body.data
    console.log(delete_item_id);
    try {
        Product.findOneAndRemove({'_id':delete_item_id},(err,data)=>{
          console.log(err,data);
          res.send('Deleted')
        })
    } catch (e) {
      res.send('Not Deleted')
    }
  })

};
