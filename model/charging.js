const mongoose = require("mongoose");
require("mongoose-double")(mongoose);

const SchemaTypes = mongoose.Schema.Types;

const ChargingSchema = mongoose.Schema(
  {
    money: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("charging", ChargingSchema);
