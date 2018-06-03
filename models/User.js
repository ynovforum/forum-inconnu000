const Sequelize = require('sequelize');

function defineUser(database) {
    const User = database.define('user', {
        name: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        bio: {
            type: Sequelize.STRING
        },
        role: {
            type: Sequelize.STRING
        }
    });
    User.associate = ({ req, res }) => {
        User.hasMany(Questions);
        User.hasMany(Comments);
    };
}

module.exports = defineUser;