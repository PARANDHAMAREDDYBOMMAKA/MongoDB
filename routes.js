const express = require("express");
const router = express.Router();
const GameModel = require("./Model/model");
router.post("/add", async (req, res) => {
  try {
    const newGame = new GameModel(req.body);
    await newGame.save(req.body);

    res.json({ message: "Game data posted successfully", data: newGame });
  } catch (error) {
    console.error("Error posting data:", error);
    res.status(500).json({ error: "Unable to post data" });
  }
});
router.get("/data", async (req, res) => {
  try {
    const data = await GameModel.find();
    res.json({ message: "Data fetched successfully", data });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Unable to fetch data" });
  }
});

router.delete("/remove", async (req, res) => {
  const gameId = req.params.id;

  try {
    const deletedGame = await GameModel.deleteMany(gameId);

    if (!deletedGame) {
      return res.status(404).json({ message: "Game not found" });
    }
    res.json({ message: "Game deleted successfully", data: deletedGame });
  } catch (error) {
    console.error("Error deleting game:", error);
    res.status(500).json({ error: "Unable to delete game" });
  }
});

module.exports = router;
