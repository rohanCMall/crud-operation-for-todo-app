const express=require('express');
const router=express.Router()
const Deliveryman=require("./Deliverymanschema")

router.get('/', async(req,res)=>{
   try{
        const deliveryman= await Deliveryman.find()
        res.json(deliveryman)
   }catch{
        res.send("Error")
   }
})
router.post('/',async (req,res)=>{
    const deliveryman = new Deliveryman ({
        db_roam_id: req.body.db_roam_id,
        Latitude : req.body.Latitude,
        Longitude: req.body.Longitude
    });
    try{
        const postdeliveryman= await deliveryman.save()
        res.json(postdeliveryman)
        
    }catch(err){
        res.send("error")
    }
})
router.patch('/:id',async (req,res)=>{
    try{
    const finddeliveryman=await Deliveryman.findById(req.params.id)
    finddeliveryman.Latitude=req.body.Latitude
    const x1=await finddeliveryman.save()
    res.json(x1)
    }catch(err){
        res.send("error")
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const deletedeliveryman = await Saleman.findByIdAndRemove(req.params.id)
        res.json(deletedeliveryman)
    }
 catch(err){
     res.send("error")
 }
})

module.exports=router;
