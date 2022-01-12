const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'task-manager'
});

db.connect((err) => {
    if (err)
        throw err
    console.log("Mysql connected...")
})

module.exports = db;