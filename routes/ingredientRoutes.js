const ingredientController = require("../controllers/ingredientController.js");

const router = require("express").Router();

// Create a new ingredient
router.post("/", ingredientController.create);

// Retrieve all ingredients
router.get("/", ingredientController.findAll);

// Retrieve all ingredients in stock
router.get("/in-stock", ingredientController.findAllInStock);

// Retrieve a single ingredient with id
router.get("/:id", ingredientController.findOne);

// Update a ingredient with id
router.put("/:id", ingredientController.update);

// Delete a ingredient with id
router.delete("/:id", ingredientController.delete);

// Delete all ingredients
router.delete("/", ingredientController.deleteAll);

module.exports = router