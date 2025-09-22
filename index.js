// // const name = "Richa"
// // console.log(name)

// const express = require("express");
// const mongoose=require("mongoose");
// const songRoute = require("./routes/songRoute");

// async function connectDB() {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://richakanabarmca_db_user:RKMCA@cluster0.rpgtb7z.mongodb.net/song",
//       {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       }
//     );
//     console.log("✅ MongoDB connected successfully");
//   } catch (error) {
//     console.error("❌ MongoDB connection failed:", error.message);
//     process.exit(1); // Exit if DB connection fails
//   }
// }

// // Call DB connection
// connectDB();
// const app = express();
// const PORT = 80;
// app.use(express.json());

// // app.use("/student",studentRoute);
// app.use("/song",songRoute);


// app.listen(PORT,() => {
//     console.log(`Server is running at http://localhost:${PORT}/`)
// });
const express = require("express");
const sequelize=require("sequelize");

const empRoute=require("./routes/empRoute")
const app=express();
const PORT=81;

app.use(express.json());

app.use("/emp",empRoute);

app.listen(PORT,()=>{
    console.log("serever is runing at  120.0.0.1 :"+PORT);
});