    // models/User.js

    const db = require('./db');

    class User {
        static findByEmail(email, callback) {
            const sql = 'SELECT * FROM users WHERE email = ?';
            db.query(sql, [email], (err, results) => {
                callback(err, results);
            });
        }

        static findByUsername(fullname, callback) {
            const sql = 'SELECT * FROM users WHERE fullname = ?';
            db.query(sql, [fullname], (err, results) => {
                callback(err, results);
            });
        }

        static create(email, password, fullname, callback) {
            const sql = 'INSERT INTO users (email, password, fullname) VALUES (?, ?, ?)';
            db.query(sql, [email, password, fullname], (err) => {
                callback(err);
            });
        }
    }

    module.exports = User;
