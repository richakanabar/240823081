const express=require("express");
const app=express();
const PORT=80;
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Hello BCA students");
});
app.get("/show/:id",(req,res)=>{
    res.send("Hello students \n ID: $(req.params.id)");
});

//STORE
app.post("/store",(req,res)=>{
    res.send(`Successfully stored \n ${req.body.name},${req.body.city}`);
});
//update
app.put("/update/:id",(req,res)=>{
    res.send(`Successfully updated \n ${req.params.id}, ${req.body.name},${req.body.city}`);
});

//delete
app.delete("/delete/:id",(req,res)=>{
    res.send(`Successfully deleted \n ${req.params.id}`);
});

app.listen(PORT,()=>{
    console.log(`Server is running http://localhost:${PORT}`);
})