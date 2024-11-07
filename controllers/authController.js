const User = require("../models/User");
const db = require("../models/db");
const bcrypt = require('bcryptjs');
const Email = require('../models/Email'); 
exports.getSignIn = (req, res) => {
  res.render("signin");
};

exports.getSignUp = (req, res) => {
  res.render("signup");
};


exports.postSignIn = (req, res) => {
    const { email, password } = req.body;
    console.log(`Đăng nhập với email: ${email}`);
    
    User.findByEmail(email, (err, results) => {
        if (err) {
            console.error('Lỗi khi tìm kiếm email:', err);
            req.flash('error_msg', 'Đã xảy ra lỗi khi đăng nhập.');
            return res.redirect('/auth/signin');
        }
        
        if (results.length) {
            bcrypt.compare(password, results[0].password, (err, isMatch) => {
                if (err) {
                    console.error('Lỗi khi so sánh mật khẩu:', err);
                    req.flash('error_msg', 'Đã xảy ra lỗi khi đăng nhập.');
                    return res.redirect('/auth/signin');
                }

                if (isMatch) {
                    // Nếu đăng nhập thành công, lưu userId vào session
                    req.session.userId = results[0].id;
                    req.session.email = email; // Lưu email vào session
                    console.log(`Đăng nhập thành công cho người dùng ID: ${results[0].id}`);
                    console.log(`Session userId: ${req.session.userId}`); // Kiểm tra giá trị userId
                    console.log(`Session email: ${req.session.email}`); // Kiểm tra giá trị email
                    req.flash('success_msg', 'Đăng nhập thành công!');
                    res.redirect('/email/inbox'); 
                } else {
                    console.log('Mật khẩu không chính xác.');
                    req.flash('error_msg', 'Đăng nhập không thành công. Vui lòng kiểm tra email và mật khẩu.');
                    res.redirect('/auth/signin');
                }
                
            });
        } else {
            console.log('Không tìm thấy email.');
            req.flash('error_msg', 'Đăng nhập không thành công. Vui lòng kiểm tra email và mật khẩu.');
            res.redirect('/auth/signin');
        }
    });
};




// Hàm đăng ký
exports.postSignUp = (req, res) => {
    const { email, password, fullname, confirm_password } = req.body;
  
    // Kiểm tra độ dài mật khẩu
    if (password.length < 6) {
        console.log("Mật khẩu phải có ít nhất 6 ký tự.");
        req.flash("error_msg", "Mật khẩu phải có ít nhất 6 ký tự.");
        return res.redirect("/auth/signup");
    }

    // Kiểm tra xem mật khẩu và xác nhận mật khẩu có giống nhau không
    if (password !== confirm_password) {
      console.log("Mật khẩu và xác nhận mật khẩu không khớp.");
      req.flash(
        "error_msg",
        "Mật khẩu và xác nhận mật khẩu không khớp. Vui lòng thử lại."
      );
      return res.redirect("/auth/signup");
    }
  
    // Kiểm tra xem email có bị trùng lặp không
    User.findByEmail(email, (err, emailResults) => {
      if (err) {
        console.error("Lỗi khi kiểm tra email:", err);
        req.flash(
          "error_msg",
          "Đã xảy ra lỗi khi kiểm tra email. Vui lòng thử lại."
        );
        return res.redirect("/auth/signup");
      }
  
      if (emailResults.length) {
        console.log("Email đã tồn tại.");
        req.flash(
          "error_msg",
          "Email đã được sử dụng. Vui lòng sử dụng email khác."
        );
        return res.redirect("/auth/signup");
      }
  
      // Kiểm tra xem username có bị trùng lặp không
      User.findByUsername(fullname, (err, usernameResults) => {
        if (err) {
          console.error("Lỗi khi kiểm tra username:", err);
          req.flash(
            "error_msg",
            "Đã xảy ra lỗi khi kiểm tra tên người dùng. Vui lòng thử lại."
          );
          return res.redirect("/auth/signup");
        }
  
    
  
        // Nếu không có lỗi, tiến hành mã hóa mật khẩu và tạo tài khoản
        bcrypt.hash(password, 10, (err, hash) => {
          if (err) {
            console.error("Lỗi khi mã hóa mật khẩu:", err);
            req.flash(
              "error_msg",
              "Đã xảy ra lỗi khi tạo tài khoản. Vui lòng thử lại."
            );
            return res.redirect("/auth/signup");
          }
  
          // Tạo tài khoản với mật khẩu đã mã hóa
          User.create(email, hash, fullname, (err) => {
            if (err) {
              console.error("Lỗi khi tạo tài khoản:", err);
              req.flash(
                "error_msg",
                "Đã có lỗi xảy ra khi tạo tài khoản. Vui lòng thử lại."
              );
              return res.redirect("/auth/signup");
            }
  
            req.flash(
              "success_msg",
              "Tạo tài khoản thành công! Vui lòng đăng nhập."
            );
            res.redirect("/email/inbox");
          });
        });
      });
    });
  };




exports.signOut = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Lỗi khi đăng xuất:", err);
      return res.redirect("/email/inbox"); // Quay lại inbox nếu có lỗi
    }
    console.log("Bạn đã đăng xuất thành công");
    req.flash('success_msg', 'Bạn đã đăng xuất thành công.');
    res.redirect("/auth/signin"); 
  });
};



// Thêm hàm cho trang dashboard
// exports.getDashboard = (req, res) => {
//     if (!req.session.userId) {
//         console.log('Người dùng chưa đăng nhập, chuyển hướng đến trang đăng nhập.');
//         req.flash('error_msg', 'Vui lòng đăng nhập trước khi truy cập.');
//         return res.redirect('/auth/signin');
//     }
    
//     console.log(`Người dùng đã đăng nhập: ${req.session.email}`);
//     res.render('dashboard'); // Đảm bảo render trang dashboard
// };

// authController.js
exports.getDashboard = (req, res) => {
    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    if (!req.session.userId) {
        console.log('Người dùng chưa đăng nhập, chuyển hướng đến trang đăng nhập.');
        req.flash('error_msg', 'Vui lòng đăng nhập trước khi truy cập.');
        return res.redirect('/auth/signin');
    }

    console.log(`Người dùng đã đăng nhập: ${req.session.email}`);

    // Lấy danh sách email của người dùng từ cơ sở dữ liệu
    Email.getInbox(req.session.receiver_email, (err, emails) => {
        if (err) {
            console.error('Lỗi khi lấy email:', err);
            req.flash('error_msg', 'Đã xảy ra lỗi khi lấy email.');
            return res.redirect('/auth/dashboard');
        }

        // Render trang dashboard và truyền biến emails
        res.render('dashboard', {
            title: 'Bảng Điều Khiển',
            emails: emails || [] // Đảm bảo emails luôn là một mảng
        });
    });
};
