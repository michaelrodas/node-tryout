const db = require("../models");
const ingredientRepository = db.ingredients;
const dbOperators = db.Sequelize.Op;

// Create and Save a new ingredient in database
exports.create = (req, res) => {
// Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create an ingredient
    const ingredient = {
        name: req.body.name,
        sku: req.body.sku,
        description: req.body.description,
        quantity: req.body.quantity,
        image: req.body.image,
        inStock: req.body.inStock ? req.body.inStock : false
    };

    // Save ingredient in the database
    ingredientRepository.create(ingredient)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the ingredient."
            });
        });
};

// Retrieve all ingredients from the database with condition.
exports.findAll = (req, res) => {
    const title = req.query.title;
    const condition = title ? { title: { [dbOperators.like]: `%${title}%` } } : null;

    ingredientRepository.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving ingredients."
            });
        });
};

// Find a single ingredient with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    ingredientRepository.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find ingredient with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving ingredient with id=" + id
            });
        });
};

// Update an ingredient by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    ingredientRepository.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Ingredient was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update ingredient with id=${id}. Maybe ingredient was not found or request's body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating ingredient with id=" + id
            });
        });
};

// Delete an ingredient with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    ingredientRepository.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) { //If number of elements affected is 1
                res.send({
                    message: "Ingredient was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Ingredient with id=${id}. Maybe Ingredient was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Ingredient with id=" + id
            });
        });
};

// Delete all ingredients from the database.
exports.deleteAll = (req, res) => {
    ingredientRepository.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Ingredients were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all ingredients."
            });
        });
};

//Find all ingredients with condition in stock
exports.findAllInStock = (req, res) => {
    ingredientRepository.findAll({ where: { inStock: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving ingredients."
            });
        });
};