const sequelize=require("sequelize");

const db=new sequelize("mca1","root","",{
    host:"localhost",
    dialect:"mysql",
});

db.authenticate()
    .then(()=>{
        console.log("success");
    })
    .catch((err)=>{
        console.log("error",err);
    });

    module.exports=db;
