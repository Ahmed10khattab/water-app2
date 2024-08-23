const mongoose = require("mongoose");
require("mongoose-double")(mongoose);
const SchemaTypes = mongoose.Schema.Types;

const authSchema = mongoose.Schema({
  //show all data for user
  //show only (username,email,isAdmin) data for user
  token: { type: String },
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  SearchEmail: { type: String, unique: true },
  password: { type: String, required: true },
  isAdmin: { type:Boolean , required: true },
 
},
{ timestamps: true }
);
module.exports=mongoose.model('Auth',authSchema)
