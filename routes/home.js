const router=require('express').Router();

router.post('/home',(req,res)=>{
    res.send('home router');

});

router.post('/splash',(req,res)=>{
    res.send("Splash screen");
});

module.exports=router;