const express= require('express');
const mongoose= require('mongoose');
const app=express();

const url= "mongodb://localhost:27017";

mongoose.connect(url,{useNewUrlParser: true});
const con= mongoose.connection;
app.use(express.json());
try{
    con.on('open',() => {
        console.log('connected');
    })
}catch(error)
{
    console.log("Error: "+error);
}
const Deliverymanrouter=require('./Deliveryman.js')
app.use('/Deliveryman',Deliverymanrouter)

const Urgenttasks=require('./Urgenttasks.js')
app.use('/Urgenttasks',Urgenttasks)
app.get("./",(req,res)=>{
    res.send("Hello, Welcome to kushal App")
})
const port=process.env.port || 5000;
app.listen(port, () =>{
    console.log('Server started');
})