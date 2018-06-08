var mongoose = require("mongoose");
var {Schema} = mongoose;

var productSchema = new Schema({
  'Title':{type:String},
  'Price':Number,
  'Quantity':Number,
  'Picture':{ data: Buffer},
  'Descriptions':String,
});
module.exports = mongoose.model('Product',productSchema);
