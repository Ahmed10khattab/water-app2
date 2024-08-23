// // const mongoose = require("mongoose");
// // require("mongoose-double")(mongoose);
// // const SchemaTypes = mongoose.Schema.Types;

// // const userSchema = mongoose.Schema({
// //   //show all data for user
// //   //show only (username,email,isAdmin) data for user

// //  // token: { type: String, required: true },
// //   username: { type: String, required: true },
// //   email: { type: String, required: true, unique: true },
// //   password: { type: String, required: true },
// //   isAdmin: { type:Boolean , required: true },
// //   consumption: { type: SchemaTypes.Double, required: true },
// //   flowRate: { type: SchemaTypes.Double, required: true },
// //   limit: { type: SchemaTypes.Double, required: true },
// //   mobile: { type: Number, required: true },
// //   roomNumber: { type: Number, required: true },
// //   status: { type: Boolean, required: true },
// //   tax: { type: Boolean, required: true },
// // });
// // module.exports=mongoose.model('User',userSchema)

// const mongoose = require("mongoose");
// require("mongoose-double")(mongoose);
// const SchemaTypes = mongoose.Schema.Types;

// const ChargingSchema = mongoose.Schema(
//   {
//     money: { type: Number, required: true },
//   },
//   { timestamps: true }
// );

// const userSchema = mongoose.Schema(
//   {
//     userName: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     SearchEmail: { type: String, unique: true },
//     password: { type: String, required: true },
//     isAdmin: { type: Boolean,default:false },
//     consumption: { type: SchemaTypes.Double,default:0  },
//     flowRate: { type: SchemaTypes.Double,default:0 },
//     limit: { type: SchemaTypes.Double,default:0  },
//     mobile: { type: Number, required: true },
//     roomNumber: { type: Number, required: true },
//     status: { type: Boolean,default:false},
//     tax: { type: SchemaTypes.Double,default:0  },
//     charging: {
//       type: [ChargingSchema],
//       default: [],
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("User", userSchema);


const mongoose = require("mongoose");
require("mongoose-double")(mongoose);
const SchemaTypes = mongoose.Schema.Types;

const ChargingSchema = mongoose.Schema(
  {
    money: { type: Number},
  },
  { timestamps: true }
);
const taxSchema = mongoose.Schema(
  {
    value: { type: Number },
    reason: { type: String },
  },
  { timestamps: true }
);

const userSchema = mongoose.Schema(
  {
    userName: { type: String, required: true }, // Required
    email: { type: String, required: true, unique: true }, // Required
    SearchEmail: { type: String, unique: true },
    password: { type: String, required: true }, // Required
    isAdmin: { type: Boolean, default: false },
    consumption: { type: SchemaTypes.Double, default: 0 },
    flowRate: { type: SchemaTypes.Double, default: 0 },
    limit: { type:Number , default: 0 },
    mobile: { type: Number,required: true },
    roomNumber: { type: Number, required: true }, // Required
    status: { type: Boolean, default: false },
    tax: {
      type: [taxSchema],
      default: [],
    },
    charging: {
      type: [ChargingSchema],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
