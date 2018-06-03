const Sequelize = require('sequelize');

function defineQuest(database) {
    const Question = database.define('question', {

    });
    Question.associate = ({ req, res }) => {

    };
}

module.exports = defineQuest();