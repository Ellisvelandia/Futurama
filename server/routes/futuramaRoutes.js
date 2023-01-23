const router = require("express").Router();
const futuramaModel = require("../models/futuramaModel");

router.post("/add", async (req, res) => {
  try {
    const newFuturama = new futuramaModel(req.body);
    await newFuturama.save().then(() => {
      res.status(200).json({ message: "Episode Added Successfully" });
    });
  } catch (error) {
    console.log(error);
  }
});

// GET

router.get("/getEpisode", async (req, res) => {
  let episodes;
  try {
    episodes = await futuramaModel.find();
    res.status(200).json({ episodes });
  } catch (error) {
    console.log(error);
  }
});

//GET REQ WITH  ID
router.get("/getEpisode/:id", async (req, res) => {
  let futurama;
  const id = req.params.id;
  try {
    futurama = await futuramaModel.findById(id);
    res.status(200).json({ futurama });
  } catch (error) {
    console.log(error);
  }
});

//UPDATE Episode BY ID

router.put("/updateEpisode/:id", async (req, res) => {
  const id = req.params.id;
  const { number, title, writers, originalAirDate, image, video } = req.body;
  let futurama;
  try {
    futurama = await futuramaModel.findByIdAndUpdate(id, {
      number,
      title,
      writers,
      originalAirDate,
      image,
      video
    });
    futurama = await futurama
      .save()
      .then(() => res.json({ message: "Data Update" }));
  } catch (error) {
    console.log(error);
  }
});

//Delete episode BY id
router.delete("/deleteEpisode/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await futuramaModel
      .findByIdAndDelete(id)
      .then(() => res.status(201).json({ message: "Delete Successfully" }));
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;