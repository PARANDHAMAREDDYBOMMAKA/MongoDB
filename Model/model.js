const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  GameTitle: String,
  Genre: String,
  Description: String,
  AvailablePlatforms: String,
  PublishedBy: String,
  YearOfRelease: Number,

});

const GameModel = mongoose.model("Game", gameSchema);


module.exports =  GameModel ;
