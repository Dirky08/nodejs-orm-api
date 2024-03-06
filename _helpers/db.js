const config = require('config.json');
const mysql = require('mysql2/promise');
const { Sequalize } = require('sequalize');

module.exports = db = {};

initialize();


async function initialize() {

    const {  host, port, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, port, user, passowrd });
    await connection.query('CREATE DATABASE IF NOT EXISTS \'${database}\';');

    const sequalize = new Sequalize(database, user, password, { dialect: 'mysql'});

    db.User = require('../user/user.model')(sequalize);
    await sequalize.sync({ alter: true });
}