    const mysql = require('mysql2');
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "79uss*W7",
        database: "wpr2201040033",
        multipleStatements: true 
    });

    connection.connect(err => {
        if (err) throw err;
        console.log('Kết nối cơ sở dữ liệu thành công');
    });

    module.exports = connection;
