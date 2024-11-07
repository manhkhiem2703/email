  const db = require("./db");

  const Email = {
    create: (emailData, callback) => {
      const { sender_email, receiver_email, subject, body, attachment } = emailData;
  
      const sentAt = new Date().toISOString().slice(0, 19).replace("T", " "); // Định dạng thời gian gửi
  
      const query =
        'INSERT INTO emails (sender_email, receiver_email, subject, body, attachment, sent_at) VALUES (?, ?, ?, ?, ?, ?)';
  
      db.query(query, [sender_email, receiver_email, subject, body, attachment, sentAt], (err, results) => {
        if (err) {
          console.error("Lỗi khi gửi email:", err);
          return callback(err);
        }
        console.log(`Email đã được gửi. Sender: ${sender_email}, Receiver: ${receiver_email}, Subject: ${subject}, Body: ${body}`);
        callback(null, results);
      });
    },


    getInbox: (userId, callback) => {
      const query =
        "SELECT * FROM emails WHERE receiver_email = ? ORDER BY sent_at DESC"; // Sắp xếp theo thời gian gửi
      db.query(query, [userId], callback);
    },


    // getInbox: (userId, page = 1, callback) => {
    //   const limit = 5; // Số lượng email mỗi trang
    //   const offset = (page - 1) * limit; // Tính toán vị trí bắt đầu

    //   const query =
    //     "SELECT * FROM emails WHERE receiver_email = ? ORDER BY sent_at DESC LIMIT ? OFFSET ?";
    //   db.query(query, [userId, limit, offset], callback);
    // },

    // Hàm lấy hộp thư đi
    getOutbox: (userId, callback) => {
      const query =
        "SELECT * FROM emails WHERE sender_email = ? ORDER BY sent_at DESC"; 
      db.query(query, [userId], callback);
    },

    // Hàm xóa email
    delete: (emailId, callback) => {
      const query = "DELETE FROM emails WHERE id = ?"; 
      db.query(query, [emailId], callback); 
    },

    // Hàm lấy email theo ID
    getEmailById: (emailId, callback) => {
      const query = "SELECT * FROM emails WHERE id = ?";
      db.query(query, [emailId], callback);
    },
  };

  module.exports = Email;
