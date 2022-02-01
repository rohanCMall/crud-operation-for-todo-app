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
        status :req.body.status
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

module.exports = router