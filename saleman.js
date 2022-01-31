const express=require('express');
const router=express.Router()
const Saleman=require("./salemans")
const newsaleman = new Saleman()

router.get('/', async (req,res)=>{
   try{
        const salemans= await Saleman.find()
        res.json(salemans)
   }catch{
        res.send("Error")
   }
})
router.post('/',async (req,res)=>{
    const newsaleman = new Saleman ({
        db_roam_id: req.body.db_roam_id,
        Latitude : req.body.Latitude,
        Longitude: req.body.Longitude
    });
    try{
        const ccc= await newsaleman.save()
        res.json(ccc)
        
    }catch(err){
        res.send("error")
    }
})
router.patch('/:id',async (req,res)=>{
    try{
    const xxx=await Saleman.findById(req.params.id)
    xxx.Latitude=req.body.Latitude
    const aaa=await xxx.save()
    res.json(aaa)
    }catch(err){
        res.send("error")
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const xxx = await Saleman.findByIdAndRemove(req.params.id)
        res.json(xxx)
    }
 catch(err){
     res.send("error")
 }
})

module.exports=router;
