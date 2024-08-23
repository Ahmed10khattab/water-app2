const mongoose = require("mongoose");
require("mongoose-double")(mongoose);

const SchemaTypes = mongoose.Schema.Types;

const SettingSchema = mongoose.Schema({
  whatsAppNumber: { type: String, required: true },
  pageLink: { type: String, required: true },
  meterPrice: { type: Number, required: true },
  Instagram: { type: String, required: true },
  facebook: { type: String, required: true },

});

module.exports = mongoose.model("Setting", SettingSchema);
