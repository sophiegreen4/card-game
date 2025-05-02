
const { DataTypes } = require('sequelize');
const db = require('../db/config');

const Card = db.define("Card", {
    id: { 
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    mojo: {
        type: DataTypes.INTEGER
    },
    stamina: {
        type: DataTypes.INTEGER
    },
    imgUrl: {
        type: DataTypes.STRING
    }
});

module.exports = Card;