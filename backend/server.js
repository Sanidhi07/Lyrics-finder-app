const express=require("express");
const cors=require("cors");
const PORT=process.env.PORT || 5000


const app=express();

app.use(cors());
app.use(express.json());

//test route
app.get("/",(req,res)=>{
    res.send("Backend is running");
});

//lyrics route
app.get("/lyrics",async(req,res)=>{
    const {artist,song}=req.query;
    if(!artist || !song){
        return res.status(400).json({error:"Missing artist or song"})
    }

    try{
        const response=await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
        const data=await response.json();
        if(data.lyrics){
            res.json({lyrics : data.lyrics});

        }else {
            res.status(404).json({error : "Lyrics not found"});

        }
        
    } catch(err){
        console.log(err); 
        res.status(500).json({error :"Server error"});

    }
});

//start server
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});