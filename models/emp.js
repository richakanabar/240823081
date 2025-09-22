const sequelize=require("sequelize");
const db=require("../db");

const emp=db.define("emp",{
    id:{
        type:sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:sequelize.STRING,
        allowNull:false,
    },
    city:{
        type:sequelize.STRING,
        aloowNull:false,
    },
    address:{
        type:sequelize.STRING,
        allowNull:false,
    },
});
db.sync()
    .then(()=>{
        console.log("success");
    })
    .catch((err)=>{
        console.log("error",err);
    });

module.exports=emp;
