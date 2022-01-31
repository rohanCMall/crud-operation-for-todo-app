const  mongoose  = require("mongoose")

const saleman=new mongoose.Schema({

    db_roam_id:{
        type:String,
        required:true,
        default:false
    },
    Latitude :{
        type: Number,
        required:true,
        defalut:false
    },
    Longitude : {
        type: Number,
        required:true,
        default: false
    }
})

module.exports=mongoose.model("Saleman",saleman);
