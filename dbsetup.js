const db = require("./models/db");

const createTables = `
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        fullname VARCHAR(255) NOT NULL, -- Tên đầy đủ của người dùng
        email VARCHAR(255) UNIQUE NOT NULL, -- Địa chỉ email duy nhất
        password VARCHAR(255) NOT NULL, -- Mật khẩu của người dùng
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS emails (
        id INT AUTO_INCREMENT PRIMARY KEY,
        sender_email VARCHAR(255) NOT NULL,
        receiver_email VARCHAR(255) NOT NULL,
        subject VARCHAR(255) NOT NULL, -- Chủ đề của email
        body TEXT NOT NULL, -- Nội dung của email
        attachment VARCHAR(255), -- Tệp đính kèm hoặc đường dẫn tệsp
        sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    );
`;

db.query(createTables, (err) => {
  if (err) throw err;
  console.log("Tạo bảng thành công!");  
  db.end();
});
