// const name = "Richa"
// console.log(name)

const express = require("express");
const mongoose=require("mongoose");
const songRoute = require("./routes/songRoute");

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://richakanabarmca_db_user:RKMCA@cluster0.rpgtb7z.mongodb.net/song",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // Exit if DB connection fails
  }
}

// Call DB connection
connectDB();
const app = express();
const PORT = 80;
app.use(express.json());

// app.use("/student",studentRoute);
app.use("/song",songRoute);


app.listen(PORT,() => {
    console.log(`Server is running at http://localhost:${PORT}/`)
});


