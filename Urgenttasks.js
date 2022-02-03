const express=require('express');
const router=express.Router()
const Urgenttaskschema=require('./Urgenttasksschema')

router.get('/',async(req,res)=>{
    try{
        const result= await Urgenttaskschema.find()
        res.send(result)
    }catch(err){
        res.send("error")
    }
});

router.post('/',async(req,res)=>{
    const singleUrgenttask=new Urgenttaskschema({
        name: req.body.name,
        status :req.body.status,
        flag:req.body.flag
});
    try{
        const save= await singleUrgenttask.save()
        res.json(save)
    }catch(err){
        res.send('error')
    }
})
router.put('/',async(req,res)=>{
    const filter={"status":"pending"}
    const xx= await Urgenttaskschema.updateMany(filter,{status:req.body.status})
    res.json(xx)
})
router.delete('/',async(req,res)=>{
    const result=await Urgenttaskschema.deleteMany()
    res.json(result)
})
router.get('/flag',async(req,res)=>{
    const flag=req.query.flag;
    const xx =await Urgenttaskschema.find({
        "flag": flag
    })
    res.send(xx)
})
router.get('/flagupdate',async(req,res)=>{
    const flag=req.query.flag;
    const status=req.query.status;
    const xx= await Urgenttaskschema.updateMany({"flag":flag},{"status":status})
    res.send(xx);
})
module.exports = router