const Sequelize = require('sequelize');
const sequelize = new Sequelize('node_customers', 'root', 'deep70', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./user')(sequelize, Sequelize);

module.exports = db;
