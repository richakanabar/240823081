// const { allow } = require("joi");
const Song=require("../models/Song")
exports.index = (req,res) => {
    Song.find()
    .then((allSongs)=>{
        console.log("All songs retrieved ",allSongs);
    res.send({msg:" songs retrieved ",data:allSongs});
})
.catch((error)=>{
console.error("Error retrieving")})
};

exports.show = (req,res) => {
    Song.findById(req.params.id)
    .then((Song)=>{
        console.log("All songs retrieved",Song);
        res.send({msg:" songs retrieved ",data:Song});
    })
    .catch((error)=>{
    console.error("Error retrieving")})
};

exports.store = (req,res) => {
    const newSong = new Song({
    title: req.body.title,
    artist: req.body.artist,
    category: req.body.category,
    album: req.body.album,
    url: req.body.url,
    photo: req.body.photo,
    year: req.body.year,
  });

    newSong.save()
    .then(()=>{
        console.log("New song added");
    })
    .catch((error)=>{
    console.error("Error adding");
});
    res.send({msg:" Data stored ",data:newSong});
};

exports.update = (req,res) => {
    Song.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((updatedSong)=>{
        console.log("Song updated",updatedSong);
    res.send({msg:"Song updated",data:updatedSong});
    })
    .catch((error)=>{
        console.error("Error updating",error);
    })
};

exports.delete = (req,res) => {
    Song.findByIdAndDelete(req.params.id)
    .then(()=>{
        console.log("Song deleted");
        res.send({msg:"Data deleted for ID:"});
    })
    .catch((error)=>{
        console.error("Error deleteing",error);
    })
};