module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define('customers', {
        name: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isAlphanumeric: true
            }
        },
        email: {
            type: Sequelize.TEXT,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Sequelize.STRING,
            required: true,
            validate:{
                min : 8
            }
        },
        phone_number: {
            type: Sequelize.STRING,
            required: true,
            validate: {
                isNumeric: true,
                len:[0,10],
            }
        },
        gender: {
            type: Sequelize.STRING,
            required: true,
            validate: {
                isAlpha: true,
                isIn: [['male', 'female', 'other']]
            }
        },
        address: {
            type: Sequelize.STRING,
            validate: {
                len: [0, 250],
            },
        }
    });
  
    return Customer;
  };