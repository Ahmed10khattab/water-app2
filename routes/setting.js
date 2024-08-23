const express=require('express');
const {addSetting,updateSetting,getSetting}=require('../controller/setting');
const router=express.Router();

router.get('/GetSetting',getSetting);
router.patch('/UpdateSetting/:id',updateSetting,);
router.post('/AddSetting',addSetting);



module.exports=router;