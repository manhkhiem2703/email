const express = require("express");
const router = express.Router();
const emailController = require("../controllers/emailController");
const multer = require("multer"); // Đảm bảo rằng multer đã được import
const Email = require("../models/Email"); // Giả sử bạn có model Email

const db = require("../models/db"); // Import kết nối MySQL

const upload = multer({ dest: "uploads/" }); // Đảm bảo upload được định nghĩa

router.get("/inbox", emailController.getInbox);
router.get("/outbox", emailController.getOutbox);
// Trang soạn email
router.get("/compose", emailController.getComposer);

// Gửi email
// router.post("/compose", emailController.postComposeEmail);

router.post("/delete/:id", emailController.deleteEmail);
router.get("/:id", emailController.getEmailDetails);
router.get("/delete/:id", emailController.deleteEmail);


// Route xóa nhiều email
router.post('/delete-multiple-emails', (req, res) => {
    const emailIds = req.body.emailIds; // Mảng các ID email cần xóa
  
    if (!Array.isArray(emailIds) || emailIds.length === 0) {
      return res.status(400).send('Danh sách email cần xóa không hợp lệ');
    }
  
    // Tạo câu lệnh SQL để xóa nhiều email
    const query = 'DELETE FROM emails WHERE email_id IN (?)';
  
    // Thực hiện truy vấn xóa
    connection.query(query, [emailIds], (err, results) => {
      if (err) {
        console.error('Lỗi khi xóa email:', err);
        return res.status(500).send('Lỗi hệ thống');
      }
  
      // Trả về số lượng email đã bị xóa
      res.json({ message: `${results.affectedRows} email đã được xóa thành công` });
    });
  });

router.post("/compose", upload.single("attachment"), (req, res) => {
  const { receiver_email, subject, message } = req.body;
  const attachment = req.file ? req.file.path : null;

  // Kiểm tra và ghi log thông tin nhận được
  console.log("Receiver Email:", receiver_email);
  console.log("Subject:", subject);
  console.log("Message:", message);
  console.log("Attachment Path:", attachment);

  // Kiểm tra nếu thiếu thông tin quan trọng
  if (!receiver_email || !subject || !message) {
    req.flash("error_msg", "Vui lòng điền đầy đủ thông tin.");
    return res.redirect("/email/compose");
  }

  // Lưu vào cơ sở dữ liệu MySQL
  const query = `INSERT INTO emails (sender_email, receiver_email, subject, body, attachment, sent_at) 
                   VALUES (?, ?, ?, ?, ?, ?)`;

  db.query(
    query,
    [
      req.session.email,
      receiver_email,
      subject,
      message,
      attachment,
      new Date(),
    ],
    (err, result) => {
      if (err) {
        console.error("Lỗi khi lưu email:", err);
        req.flash("error_msg", "Đã xảy ra lỗi khi gửi email.");
        return res.redirect("/email/compose");
      }
      req.flash("success_msg", "Email đã được gửi thành công.");
      // Sau khi gửi thành công, bạn có thể đóng modal mà không cần chuyển trang
      res.send({ success: true });
    }
  );
});

module.exports = router;
