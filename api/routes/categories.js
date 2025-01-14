const router = require("express").Router();
const Category = require("../models/Category");

// POST CATEGORY
router.post("/", async (req, res) => {
  try {
    const categoryExists = await Category.findOne({ name: req.body.name });
    if (categoryExists) {
      res.json("Category already exists!");
    } else {
      const newCategory = new Category(req.body);
      const savedCategory = await newCategory.save();
      res.status(200).json(savedCategory);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET CATEGORIES
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE CATEGORY
router.delete("/:id", async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).json("The category has been deleted successfuly!");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
