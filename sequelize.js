const {Sequelize}=require("sequelize")
const sequelize = new Sequelize("mca","root","",{
    host:"localhost",
    dialect:"mysql",
});

sequelize.authenticate().then(()=>{
    console.log("Connection established")
})
.catch((err)=>{
    console.error("Unable to connect")
});

const Song= sequelize.define("Song",{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
    },
    title:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    category:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    url:{
        type:Sequelize.STRING,
        allowNull:false,
    }
});

sequelize.sync().then(()=>{
    console.log("Model created");
    })
    .catch((err)=>{
        console.error("Error creatong"+err);
    });

Song.create({
    title:"Vandematram",
    category:"Patrotic",
    url:"https:///cfkjsahkchask"
});

// Song.findAll()
//     .then((allSongs)=>{
//         console.log("All songs retrieved",allSongs);
//     })
//     .catch((err)=>{
//         console.error("Error retrieving");
//     });

// Song.update({
//     title:"Ae Mera Vatan"},{where:{id:2} })
//     .then(()=>{
//         console.log("Updted succesully");
//     })
//     .catch((err)=>{
//         console.log("Error updating"+err);
//     });

// Song.findByPk(2)
//     .then((song)=>{
//         if(song){
//             console.log("Song retireved",song);
//         }else{
//             console.log("Song not found");
//         }
//     })
//     .catch((err)=>{
//         console.error("Error retrieving:",err);
//     });

// Song.destroy({where:{id:2}})
// .then(()=>{
//     console.log("SOng deleted");
// })
// .catch((err)=>{
//     console.error("Error deleting",err)
// })