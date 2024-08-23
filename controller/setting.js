const User = require("../model/user");
const Setting = require("../model/settings");

const addSetting = async (req, res) => {
  const { whatsAppNumber, pageLink, meterPrice ,facebook,Instagram} = req.body;
 
  try {
    const newSetting = new Setting({ whatsAppNumber, pageLink, meterPrice,facebook,Instagram });
    const savedSetting = await newSetting.save();
    res.status(201).json(savedSetting);
  } catch (error) {
    res.status(400).json({ message: "Failed to create setting", error });
  }
};

const getSetting = async (req, res) => {
  try {
    const settings = await Setting.find();
    
    const formattedSettings = settings.map((setting) => ({
      ...setting._doc,
      whatsAppLink: `https://wa.me/${setting.whatsAppNumber}`,
    }));
    res.status(200).json(formattedSettings);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve settings", error });
  }
  //   try {
  //     const settings = await Setting.find();
  //     res.status(200).json(settings);
  //   } catch (error) {
  //     res.status(500).json({ message: "Failed to retrieve settings", error });
  //   }
};
const updateSetting = async (req, res) => {
  const { id } = req.params;
  const { whatsAppNumber, pageLink, meterPrice ,facebook,Instagram} = req.body;

  try {
    const updatedSetting = await Setting.findByIdAndUpdate(
      id,
      { whatsAppNumber, pageLink, meterPrice,facebook,Instagram },
      { new: true, runValidators: true }
    );
    if (!updatedSetting) {
      return res.status(404).json({ message: "Setting not found" });
    }
    res.status(200).json(updatedSetting);
  } catch (error) {
    res.status(400).json({ message: "Failed to update setting", error });
  }
};
//async (req, res) => {
//   const { id } = req.params;
//   const { whatsAppNumber, pageLink, meterPrice } = req.body;

//   try {
//     const updatedSetting = await Setting.findByIdAndUpdate(
//       id,
//       { whatsAppNumber, pageLink, meterPrice },
//       { new: true }
//     );
//     if (!updatedSetting) {
//       return res.status(404).json({ message: "Setting not found" });
//     }
//     res.status(200).json(updatedSetting);
//   } catch (error) {
//     res.status(400).json({ message: "Failed to update setting", error });
//   }
// };

module.exports = {
  getSetting,
  addSetting,
  updateSetting,
};
