const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelizeInstance = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelizeInstance = sequelizeInstance;
db.ingredients = require("./ingredientModel.js")(sequelizeInstance, Sequelize);

module.exports = db;