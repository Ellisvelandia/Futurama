const router = require("express").Router();
const creatorModel = require("../models/creatorModel");

router.post("/addCreator", async (req, res) => {
  try {
    const newCreator = new creatorModel(req.body);
    await newCreator.save().then(() => {
      res.status(200).json({ message: "Creator Added Successfully" });
    });
  } catch (error) {
    console.log(error);
  }
});

// GET

router.get("/getCreator", async (req, res) => {
  let creator;
  try {
    creator = await creatorModel.find();
    res.status(200).json({ creator });
  } catch (error) {
    console.log(error);
  }
});

//GET REQ WITH  ID
router.get("/getCreator/:id", async (req, res) => {
  let creator;
  const id = req.params.id;
  try {
    creator = await creatorModel.findById(id);
    res.status(200).json({ creator });
  } catch (error) {
    console.log(error);
  }
});

//UPDATE Episode BY ID

router.put("/updateCreator/:id", async (req, res) => {
  const id = req.params.id;
  const { name, image, description } = req.body;
  let creator;
  try {
    creator = await creatorModel.findByIdAndUpdate(id, {
      name,
      image,
      description
    });
    creator = await creator
      .save()
      .then(() => res.json({ message: "Data Update" }));
  } catch (error) {
    console.log(error);
  }
});

//Delete episode BY id
router.delete("/deleteCreator/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await creatorModel
      .findByIdAndDelete(id)
      .then(() => res.status(201).json({ message: "Delete Successfully" }));
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;