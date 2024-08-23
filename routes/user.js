const express=require('express');
const {deleteAllUser,addUser,deleteOneUser,getAllUsers,getOneUser,updateUser, getLastFiveUsers, getHighFiveUsers, addChargeToUser, addTaxToUser,updateTaxForUser,deleteTaxFromUser}=require('../controller/users');
const router=express.Router();
const {verfiyAdmin}=require('../utils/verfy_user_token/verfy')

router.post("/AddUser",verfiyAdmin,addUser);
router.get("/GetAllUser",verfiyAdmin,getAllUsers);
router.get("/GetOneUser/:id",verfiyAdmin, getOneUser);
router.delete("/DeleteAllUsers", verfiyAdmin,deleteAllUser);
router.patch("/UpdateUser/:id",updateUser);
router.delete("/DeleteOneUser/:id",verfiyAdmin,deleteOneUser);
router.get("/LastFiveUsersAdded",verfiyAdmin,getLastFiveUsers);
router.get("/HighFiveUsersCharging",verfiyAdmin,getHighFiveUsers);
router.post("/AddChargeToUser/:id",verfiyAdmin,addChargeToUser);
router.post("/AddTaxToUser/:id",verfiyAdmin,addTaxToUser);
router.patch("/UpdateTaxToUser/:UserId/:TaxId",verfiyAdmin,updateTaxForUser);
router.delete("/DeleteTaxafromUser/:UserId/:TaxId",verfiyAdmin,deleteTaxFromUser);






router.get('/mmn',(req,res)=>
res.send('server running successffuly')
);
module.exports=router;