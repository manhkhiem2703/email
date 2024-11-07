const session = require('express-session');
const path = require('path');
const flash = require('connect-flash');
const express = require("express");
const multer = require("multer");
const app = express();

require('dotenv').config(); // Đọc file .env
const EmailController = require("./controllers/emailController");

// Cấu hình kết nối database (thêm file db.js hoặc cấu hình riêng)
require('./models/db');

// Cấu hình middleware
app.use(express.urlencoded({ extended: true })); // Phân tích dữ liệu từ form
app.use(express.static(path.join(__dirname, 'public'))); // Cung cấp tệp tĩnh
app.use(session({
  secret: 'khiem123', // Sử dụng chuỗi bí mật cố định
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 }
}));

app.use(flash()); // Đặt middleware flash ở đây
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
});

// Cấu hình multer cho việc lưu trữ tệp
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Lưu tệp vào thư mục uploads
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Đặt tên tệp theo thời gian
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true); 
    } else {
      cb(new Error('Loại tệp không hợp lệ'), false);
    }
  },
});




app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({ secret: "your-secret", resave: false, saveUninitialized: true }));
app.use(flash());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.set('layout', 'layouts/main'); // Chỉ định layout chung


const authRoutes = require('./routes/authRoutes');
const emailRoutes = require('./routes/emailRoutes');
app.use('/auth', authRoutes);
app.use('/email', emailRoutes);
// Route soạn email
app.get("/email/compose", EmailController.getComposer);
app.post("/email/compose", upload.single("attachment"), EmailController.postComposeEmail);

app.get('/', (req, res) => res.redirect('/auth/signin'));

// Khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server chạy tại http://localhost:${PORT}`);
});
