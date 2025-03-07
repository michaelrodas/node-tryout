module.exports = (sequelize, Sequelize) => {
    const ingredientEntity = sequelize.define("ingredient", {
        name: {
            type: Sequelize.STRING
        },
        sku: {
          type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        quantity: {
            type: Sequelize.INTEGER
        },
        image: {
            type: Sequelize.STRING
        },
        inStock: {
            type: Sequelize.BOOLEAN
        }
    });

    return ingredientEntity;
};
