const router = require("express").Router();
const futuramaModel = require("../models/futuramaModel.js");

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

router.get("/getFuturama", async (req, res) => {
  let singers;
  try {
    singers = await futuramaModel.find();
    res.status(200).json({ singers });
  } catch (error) {
    console.log(error);
  }
});

//GET REQ WITH  ID
router.get("/getFuturama/:id", async (req, res) => {
  let futurama;
  const id = req.params.id;
  try {
    futurama = await futuramaModel.findById(id);
    res.status(200).json({ futurama });
  } catch (error) {
    console.log(error);
  }
});

//UPDATE SINGERS BY ID

router.put("/updateFuturama/:id", async (req, res) => {
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

//Delete Book BY id
router.delete("/deleteFuturama/:id", async (req, res) => {
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