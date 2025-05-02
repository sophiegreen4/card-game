// add your database connection here


// import sequelize
const { Sequelize } = require('sequelize');


// create sequelize instance
const db = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite3'
});

// export sequelize instance
module.exports = db;

// test connection
db.authenticate()
  .then(() => {
    console.log('Database connection established.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });