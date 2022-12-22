const connection = require("./Config/db");

const express = require("express");
const app = express();
const { Gkeasy,Gkmedium,Gkhard,sporteasy,sporthard,sportmedium,geoeasy,geohard,geomedium } = require("./Model/Gk.model");
const cors = require("cors");
app.use(cors());


app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});



app.get("/gkeasy",async(req,res)=>{
    const {limit}=req.query;
  // console.log(limit);
    
        const AllJobs=await Gkeasy.find().limit(limit);
        res.send(AllJobs);
    
})
app.get("/gkmedium",async(req,res)=>{
    const {limit}=req.query;
   
    
        const AllJobs=await Gkmedium.find().limit(limit);
        res.send(AllJobs);
    
})
app.get("/gkhard",async(req,res)=>{
    const {limit}=req.query;
   
    
        const AllJobs=await Gkhard.find().limit(limit);
        res.send(AllJobs);
    
})


//Sports-------------------------------------------------------------------------------------------------

app.get("/sporteasy",async(req,res)=>{
    const {limit}=req.query;
  // console.log(limit);
    
        const AllJobs=await sporteasy.find().limit(limit);
        res.send(AllJobs);
    
})
app.get("/sportmedium",async(req,res)=>{
    const {limit}=req.query;
   
    
        const AllJobs=await sportmedium.find().limit(limit);
        res.send(AllJobs);
    
})
app.get("/sporthard",async(req,res)=>{
    const {limit}=req.query;
   
    
        const AllJobs=await sporthard.find().limit(limit);
        res.send(AllJobs);
    
})
//Geography------------------------------------------------------------------------------------------------------
app.get("/geoeasy",async(req,res)=>{
    const {limit}=req.query;
  // console.log(limit);
    
        const AllJobs=await geoeasy.find().limit(limit);
        res.send(AllJobs);
    
})
app.get("/geomedium",async(req,res)=>{
    const {limit}=req.query;
   
    
        const AllJobs=await geomedium.find().limit(limit);
        res.send(AllJobs);
    
})
app.get("/geohard",async(req,res)=>{
    const {limit}=req.query;
   
    
        const AllJobs=await geohard.find().limit(limit);
        res.send(AllJobs);
    
})









app.listen(4000, async () => {
  try {
    await connection;
    console.log("connected to db sucessfully");
  } catch (err) {
    console.log("not able to connect");
  }
});


