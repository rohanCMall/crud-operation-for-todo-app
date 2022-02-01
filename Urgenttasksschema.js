const  mongoose  = require("mongoose")

const Urgenttasksschema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
        default:false
    },
    status:{
        type: String,
        required:true,
        defalut:false
    },
    
})

module.exports=mongoose.model("Urgenttasksschema",Urgenttasksschema);
