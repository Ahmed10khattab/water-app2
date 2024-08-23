const express=require('express');
const {login,register,verfiyUser}=require('../controller/auth');
const router=express.Router();

router.post("/Login",login);
router.post("/SignUp",register);
router.post('/verfiyUser',verfiyUser);

router.get('/mmn',(req,res)=>
res.send('server running successffuly')
);
module.exports=router;