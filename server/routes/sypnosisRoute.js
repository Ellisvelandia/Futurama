const router = require("express").Router();
const sypnosisModal = require("../models/sypnosisModal");

router.post("/addSypnosis", async (req, res) => {
  try {
    const newSypnosis = new sypnosisModal(req.body);
    await newSypnosis.save().then(() => {
      res.status(200).json({ message: "sypnosis Added Successfully" });
    });
  } catch (error) {
    console.log(error);
  }
});

// GET

router.get("/getSypnosis", async (req, res) => {
  let sypnosis;
  try {
    sypnosis = await sypnosisModal.find();
    res.status(200).json({ sypnosis });
  } catch (error) {
    console.log(error);
  }
});

//GET REQ WITH  ID
router.get("/getSypnosi/:id", async (req, res) => {
  let sypnosi;
  const id = req.params.id;
  try {
    sypnosi = await sypnosisModal.findById(id);
    res.status(200).json({ sypnosi });
  } catch (error) {
    console.log(error);
  }
});

//UPDATE Episode BY ID

router.put("/updateSypnosi/:id", async (req, res) => {
  const id = req.params.id;
  const { title, poster, desc, firstEpisodeDate } = req.body;
  let sypnosi;
  try {
    sypnosi = await sypnosisModal.findByIdAndUpdate(id, {
      title,
      poster,
      desc,
      firstEpisodeDate
    });
    sypnosi = await sypnosi
      .save()
      .then(() => res.json({ message: "Data Update" }));
  } catch (error) {
    console.log(error);
  }
});

//Delete episode BY id
router.delete("/deleteSypnosi/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await sypnosisModal
      .findByIdAndDelete(id)
      .then(() => res.status(201).json({ message: "Delete Successfully" }));
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;