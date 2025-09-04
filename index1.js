const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://richakanabarmca_db_user:RKMCA@cluster0.rpgtb7z.mongodb.net/" , {
 
});

const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  category: String,
  album: String,
  url: String,
  photo: String,
  year: Number,
});

const Song = mongoose.model("Song", songSchema);
console.log("Song model created successfully");

Song.find()
  .then((allSongs) => {
    console.log("All songs retrieved successfully:", allSongs);
  })
  .catch((error) => {
    console.error("Error retrieving songs:", error);
  });

Song.find({ category: "Bollywood" })
  .then((allSongs) => {
    console.log("All songs retrieved successfully:", allSongs);
  })
  .catch((error) => {
    console.error("Error retrieving songs:", error);
  });

// const newSong = new Song({
//   title: "Vandematram",
//   artist: "Arijit Singh",
//   category: "Patrotic",
//   album: "Patrotic",
//   url: "https://bajaao.pendujatt.com.se/load/128/66780039/2136806/Aavan Jaavan.mp3",
//   photo:
//     "https://pendujatt.com.se/uploads/album/aavan-jaavan-from-war-2-pritam.webp",
//   year: 2022,
// });
// const newSong = new Song({
//   title: "Agar Tum Saath Ho",
//   artist: "Arijit Singh",
//   category: "Bollywood",
//   album: "Bollywood",
//   url: "https://bajaao.pendujatt.com.se/load/128/66780039/2136806/Aavan Jaavan.mp3",
//   photo:
//     "https://pendujatt.com.se/uploads/album/aavan-jaavan-from-war-2-pritam.webp",
//   year: 2022,
// });
// newSong
//   .save()
//   .then(() => {
//     console.log("New song added successfully");
//   })
//   .catch((error) => {
//     console.error("Error adding new song:", error);
//   });
