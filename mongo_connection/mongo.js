const mongo = require("mongoose");

mongo
  .connect(
    "mongodb://water:XwWlKLCRsevABVCL@ac-pka8jeg-shard-00-00.ytbxqwi.mongodb.net:27017,ac-pka8jeg-shard-00-01.ytbxqwi.mongodb.net:27017,ac-pka8jeg-shard-00-02.ytbxqwi.mongodb.net:27017/waterApp?replicaSet=atlas-d5fq1b-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=AtlasCluster"
  )
  .then(() => {
    console.log("connected mongoose successfull");
  })
  .catch((error) => console.log(error));
