
const { DataTypes } = require('sequelize');
const db = require('../db/config');

const Deck = db.define("Deck", {
    id: { 
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    xp: {
        type: DataTypes.INTEGER
    }
});

module.exports = Deck;