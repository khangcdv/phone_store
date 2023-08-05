const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MockAPI URL
const mockApiBaseUrl = 'https://64ba1e3779b7c9def6c19b82.mockapi.io/api/user';

// Endpoint để lưu thông tin đăng nhập người dùng
app.post('/api/login', async (req, res) => {
    try {
        // Lấy dữ liệu đăng nhập từ request body
        const { username, password } = req.body;

        // Tạo một bản ghi mới trên MockAPI
        const response = await axios.post(`${mockApiBaseUrl}/users`, {
            username,
            password,
        });

        // Trả về phản hồi thành công nếu tạo thành công
        res.status(201).json({ message: 'Đăng nhập thành công', data: response.data });
    } catch (error) {
        // Trả về phản hồi lỗi nếu có lỗi xảy ra
        res.status(500).json({ message: 'Đã xảy ra lỗi', error: error.message });
    }
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${52099}`);
});
