const Sequelize = require('sequelize');

function defineUser(database) {
    const User = darabase.define('user', {
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
    User.associate = ({ request, response }) => {
        User.hasMany(Questions);
        User.hasMany(Comments);
    };
}

module.exports = defineUser;