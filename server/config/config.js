// Connection URL
var mongoose= require('mongoose');

module.exports = (databse_name)=>{
  var mongourl = `mongodb://localhost:27017/${databse_name}`;
  mongoose.createConnection(mongourl,(err)=>{
    if(err){
      console.log(err);
    }else{
      console.log("Connected To Database ->"+databse_name);
    }
  });
}
