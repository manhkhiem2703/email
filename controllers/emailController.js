// controllers/emailController.js
const Email = require("../models/Email");

exports.getInbox = (req, res) => {
  const receiver_email = req.session.email;

  Email.getInbox(receiver_email, (err, emails) => {
    if (err) {
      console.error("Lỗi khi lấy email:", err);
      return res.status(500).send("Đã xảy ra lỗi khi lấy hộp thư đến.");
    }
    res.render("inbox", { emails });
  });
};

exports.getOutbox = (req, res) => {
  const sender_email = req.session.email;
  console.log("User ID:", sender_email); // Xem giá trị của sender_email

  Email.getOutbox(sender_email, (err, emails) => {
    if (err) {
      console.error("Lỗi khi lấy hộp thư đi:", err);
      return res.status(500).send("Đã xảy ra lỗi khi lấy hộp thư đi.");
    }
    console.log("Emails:", emails); // Kiểm tra dữ liệu emails
    res.render("outbox", { emails });
  });
};




exports.deleteEmail = (req, res) => {
  const emailId = req.params.id;

  Email.delete(emailId, (err) => {
    if (err) {
      console.error("Lỗi khi xóa email:", err);
      return res.status(500).send("Đã xảy ra lỗi khi xóa email.");
    }
    req.flash("success_msg", "Email đã được xóa thành công."); // Thêm thông báo thành công
    res.redirect("/email/inbox");
  });
};

exports.getEmailDetails = (req, res) => {
  const emailId = req.params.id; // Lấy ID từ tham số URL

  Email.getEmailById(emailId, (err, email) => {
    if (err) {
      console.error('Lỗi khi lấy email:', err);
      return res.status(500).send('Đã xảy ra lỗi khi lấy chi tiết email.');
    }
    if (!email || email.length === 0) {
      return res.status(404).send('Email không tìm thấy.');
    }
    res.render('emailDetails', { email: email[0] }); // Gửi thông tin email tới view
  });
};




exports.getComposer = (req, res) => {
  if (!req.session.email) {
    return res.redirect("/auth/signin"); // Chuyển hướng đến trang đăng nhập nếu chưa đăng nhập
  }
  res.render('composer', {
    receiver_email: '',
    subject: '',
    body: '',
  });
};

exports.postComposeEmail = (req, res) => {
  const { receiver_email, subject, message } = req.body;
  const sender_email = req.session.email;

  // Xử lý đính kèm nếu có
  const attachmentPath = req.file ? req.file.path : null;

  // Gửi email vào cơ sở dữ liệu
  Email.create({ sender_email, receiver_email, subject, body, attachment }, (err) => {
    if (err) {
      console.error("Lỗi khi gửi email:", err);
      req.flash("error_msg", "Đã xảy ra lỗi khi gửi email.");
      return res.redirect("/email/compose");
    }
    req.flash("success_msg", "Email đã được gửi thành công.");
    res.redirect("/email/inbox"); // Chuyển hướng đến hộp thư đến sau khi gửi email
  });
};